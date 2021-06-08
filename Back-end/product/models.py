from django.db import models
from utils import rename_image
from .managers import ProductManager,ProductInfoManager


class Category(models.Model):
    category        = models.CharField(max_length=60)
    parent_category = models.ForeignKey("self", limit_choices_to={'parent_category__isnull':True}, on_delete=models.CASCADE, blank=True, null=True,related_name="sub_cat")
    image           = models.ImageField(upload_to="categories", blank=True,null=True) 
    
    def __str__(self):
        return self.category
    class Meta():
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class Product(models.Model):
    vendor          = models.ForeignKey('account.Vendor', on_delete=models.CASCADE)
    parent_category = models.ForeignKey(Category,on_delete=models.CASCADE,related_name="product_parent_category",null=True,blank=True,limit_choices_to={"parent_category__isnull":True})
    category        = models.ForeignKey(Category,on_delete=models.CASCADE,related_name="product_category",null=True,blank=True,limit_choices_to={"parent_category__isnull":False})
    name            = models.CharField(max_length=100)
    price_vender    = models.DecimalField(decimal_places=2,max_digits=10)
    price_achat     = models.DecimalField(decimal_places=2,max_digits=10)
    detail          = models.TextField(null=True,blank=True)
    image           = models.ImageField(upload_to="products",null=True,blank=True)
    quantity        = models.PositiveIntegerField()
    date            = models.DateField(verbose_name="Date",auto_now_add=True)
    rating          = models.IntegerField(default=0)
    objects         = ProductManager()
    # models methods
    def __str__(self):
        return self.name
    @property
    def get_benefits(self): 
        if self.price_achat:
            return float(self.price_vender - self.price_achat)
        return None
    @property
    def get_category(self):
        category    = self.category.category
        return category
    @property
    def get_parent_category(self):
        category    = self.category.parent_category.category
        return category

    class Meta():
        ordering = ['date']


class ProductInfo(models.Model):
    class Rating(models.IntegerChoices):
        ZERO  = 0
        ONE   = 1
        TWO   = 2
        THREE = 3
        FOUR  = 4
        FIVE  = 5
    consumer = models.ForeignKey('account.Costumer',on_delete=models.CASCADE,null=True,blank=True)
    product  = models.ForeignKey(Product,on_delete=models.CASCADE)
    rating   = models.IntegerField(choices=Rating.choices, default=Rating.ZERO, null=True,blank=True)
    comment  = models.TextField(null=True,blank=True)
    date     = models.DateField(auto_now_add=True)
    objects  = ProductInfoManager()
    def __str__(self):
        return self.consumer.username


class Cobon(models.Model):
    product    = models.ForeignKey(Product,on_delete=models.CASCADE)
    key        = models.CharField(max_length=8,unique=True,auto_created=True)
    percentage = models.PositiveIntegerField()
    
    def __str__(self):
        return self.key


