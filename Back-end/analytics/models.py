from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from signals import object_viewed_signal
from utils import get_client_ip

class ContentViewed(models.Model):
    user           = models.ForeignKey('account.Costumer',null=True,blank=True,on_delete=models.CASCADE)
    content        = models.ForeignKey(ContentType,on_delete=models.CASCADE)
    ip_addresse    = models.GenericIPAddressField()
    object_id      = models.PositiveIntegerField()
    object_content = GenericForeignKey('content','object_id')
    date_time      = models.DateTimeField(auto_now_add=True)


class UsersStats(models.Model):
    class SocialMedia(models.TextChoices):
        FACEBOOK   = 'FB'
        INSTAGRAME = 'INSTA'
        GOOGLE     = 'GOOGLE'

    ip_addresse = models.GenericIPAddressField()
    Social      = models.CharField(choices=SocialMedia.choices, max_length=20) 
    registered  = models.BooleanField(default=False)
    date        = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.ip_addresse

class ShopTimeStats(models.Model):
    ip_addresse = models.GenericIPAddressField()
    start       = models.TimeField(auto_now_add=True)
    finish      = models.TimeField(blank=True, null=True)
    date        = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.ip_addresse
    @property
    def get_time(self):
        return self.start - self.finish


class RequestsStats(models.Model):  #DONE 
    total_requests = models.IntegerField()
    date           = models.DateField(verbose_name="Date",auto_now_add=True)
    def __str__(self):
        return self.total_requests
    

class ProductsStats(models.Model):  #DONE
    product = models.ForeignKey('product.Product', on_delete=models.CASCADE)
    start   = models.DateField(verbose_name="Start",auto_now_add=True)
    finish  = models.DateField(blank=True ,null=True)
    def days(self):
        if self.finish:
            return self.start - self.finish # Tested
        return None


    
def object_viewed_reciver(sender,instance,request,*args, **kwargs):
    c_type = ContentType.objects.get_for_model(sender)
    print(instance.id)
    ContentViewed.objects.create(
        user = request.user, 
        ip_addresse = get_client_ip(request),
        object_id = instance.id,
        content = c_type
    )


object_viewed_signal.connect(object_viewed_reciver)