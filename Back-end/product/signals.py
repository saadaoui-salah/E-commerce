from django.db.models.signals import post_save
from analytics.models import ProductsStats
from django.dispatch import receiver
from .models import Product, ProductInfo, Category
from utils import rename_image

def create_product_stats(id):
    new_stats = ProductsStats.objects.create(product_id=id)
    new_stats.save()
    return True

#### PRODUCT SIGNAL
@receiver(post_save, sender=Product)
def product_save_reciver(sender, created, instance,**kwargs):
    if created:
        id = instance.id
        create_product_stats(id)
        rename_image(instance,id,"product")
        instance.save()
    return True

#### CATEGORY SIGNAL
@receiver(post_save, sender=Category)
def category_rating_reciver(sender, created, instance,**kwargs):
    if created:
        id = instance.id
        rename_image(instance,id,"category")
        instance.save()
    return True

#### PRODUCTINFO SIGNAL
@receiver(post_save, sender=ProductInfo)
def product_rating_reciver(sender, created, instance,**kwargs):
    if created:
        id = instance.product_id
        instance.save()
        product = Product.objects.filter(id=id)
        ratings = ProductInfo.objects.get_rating_by_product_id(id)
        ratings_length = len(ratings)
        if ratings_length > 1:
            ratings_mean = sum(ratings)/ratings_length
        else:    
            ratings_mean = ratings[0]
        product.update(rating=ratings_mean)
        return True
    return False