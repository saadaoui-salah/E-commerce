from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from analytics.models import RequestsStats, ProductsStats
from .managers import RequestManager
from product.models import Product
# MODELs ####################


class Request(models.Model):
    
    class Status(models.TextChoices):
        DONE      ="done"
        CANCELED  ="canceled"
        WAITING   ="waiting"

    vendor     = models.ForeignKey("account.Vendor",on_delete=models.CASCADE, related_name="r_vendor_fk")
    consumer     = models.ForeignKey("account.Costumer",on_delete=models.CASCADE, related_name="r_costumer_fk")
    product      = models.ForeignKey("product.Product", on_delete=models.CASCADE, related_name="product")
    product_num  = models.PositiveIntegerField()
    phone_number = models.PositiveIntegerField()
    adresse      = models.CharField(max_length=200)
    status       = models.CharField(choices=Status.choices, default=Status.WAITING, max_length=15)
    date         = models.DateField(auto_now=True,verbose_name="Date")
    objects      = RequestManager()
    @property
    def get_category(self):
        category    = self.products.product.category.category
        return category
    @property
    def get_parent_category(self):
        category    = self.products.product.category.parent_category
        return category
    @property
    def get_vendor(self):
        return self.product.vendor.username
    @property
    def get_costumer(self):
        return self.consumer.username
         
    class Meta():
        ordering = ['-date']

############# SIGNALS
# total req for each day
def save_req_stats(instance):
    request      = Request.objects.last()
    last_date    = request.date
    current_date = instance.date
    # check if we start new day
    # and count total req for the past day
    if last_date < current_date:
        total_requests = Request.objects.total_date(date=last_date)
        new_stats      = RequestsStats.objects.create(total_requests=total_requests)
        new_stats.save()
        print("request stats created")
        return True
    return False

# update product quantity  
def update_product(instance):
    id               = instance.product.id
    product          = Product.objects.get(id=id)
    num              = product.quantity-instance.product_num
    if num >= 0 :
        Product.objects.filter(id=id).update(quantity=num)
        if num == 0 :
            print(instance.date)
            ProductsStats.objects.filter(product_id=id).update(finish=instance.date)
            return True
        return True
    return False

# REQUEST SIGNAL 
@receiver(post_save, sender=Request)
def request_save_receiver(sender, instance,**kwargs):
    if instance.status == Request.Status.DONE:
        saved_stats_status    = save_req_stats(instance) # save request stats
        update_product_status = update_product(instance)
        status = {'save_status':saved_stats_status,'update_status':update_product_status}
        return status
    return False