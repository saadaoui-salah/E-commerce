from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractUser, BaseUserManager
from utils import make_username

class Feature(models.Model):
    feature     = models.CharField(max_length=200)
    description = models.TextField()
    image       = models.ImageField(upload_to="features")

    def __str__(self):
        return self.feature
    

############## MANAGERS
class VendorManager(BaseUserManager):
    def get_queryset(self,*args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type=User.Type.VENDOR,multi_vendor_fk=None)


class SubVendorManager(BaseUserManager):
    def get_queryset(self,*args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type=User.Type.VENDOR,multi_vendor_fk= not None)


class CostumerManager(BaseUserManager):
    def get_queryset(self,*args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type=User.Type.CONSUMER)


class MultiVendorManager(BaseUserManager):
    def get_queryset(self,*args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type=User.Type.MULTI_VENDOR)


############# COSTUM USER
class User(AbstractUser):
    class Type(models.TextChoices):
        CONSUMER     = "CONSUMER","Costumer"
        VENDOR       = "VENDOR","Vendor"
        MULTI_VENDOR = "MULTI_VENDOR", "Multi_vendor"
        ADMIN        = "ADMIN", "Admin"

    first_name   = models.CharField(max_length=60,null=True,blank=True)
    last_name    = models.CharField(max_length=60,null=True,blank=True)
    birthday     = models.DateField(null=True,blank=True)
    phone_number = models.IntegerField(null=True,blank=True)
    addresse     = models.ForeignKey('Adresse',on_delete=models.CASCADE,null=True,blank=True)
    image        = models.ImageField(upload_to="profiles/",null=True, blank=True)
    type         = models.CharField(max_length=20,choices=Type.choices,null=True,blank=True)
    features     = models.ManyToManyField(Feature)
    confirmed    = models.BooleanField(default=False)
    user_multi_vendor = models.ForeignKey(
        "self",
        limit_choices_to={"type":"MULTI_VENDOR"},
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="multi_vendor_fk")
    user_vendor = models.ForeignKey(
        "self",
        limit_choices_to={"type":"VENDOR","user_multi_vendor__isnull":True},
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="vendor_fk")
    
    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"

    @property
    def is_vendor(self):
        if self.type == self.Type.VENDOR:
            return True
        return False
    @property
    def is_costumer(self):
        if self.type == self.Type.CONSUMER:
            return True
        return False
    @property
    def is_multi_vendor(self):
        if self.type == self.Type.MULTI_VENDOR:
            return True
        return False
    @property
    def is_admin(self):
        if self.type == self.Type.ADMIN:
            return True
        return False
        


############# USERS TYPES 
class MultiVendor(User):
    objects    = MultiVendorManager()
    class Meta():
        proxy = True

    def save(self,*args, **kwargs):
        if not self.pk:
            self.type = User.Type.MULTI_VENDOR
        return super().save(*args, **kwargs)


class Vendor(User):
    objects       = VendorManager()
    class Meta():
        proxy = False
        
    def save(self,*args, **kwargs):
        if not self.pk:
            self.type = User.Type.VENDOR
            self.user_multi_vendor = None
        return super().save(*args, **kwargs)


class Costumer(User):
    objects    = CostumerManager()
    class Meta():
        proxy = True

    def save(self,*args, **kwargs):
        if not self.pk:
            self.type = User.Type.CONSUMER
        return super().save(*args, **kwargs)


class SubVendor(User):
    objects       = SubVendorManager()
    class Meta():
        proxy = True

    def save(self,*args, **kwargs):
        if not self.pk:
            if self.user_multi_vendor != None:
                self.type = User.Type.VENDOR
                return super().save(*args, **kwargs)
            raise "This type should have a multi vendor foreign key"

class Adresse(models.Model):
    country = models.CharField(max_length=50)
    wilaya  = models.CharField(max_length=50)

    def __str__(self):
        return self.country + "--" + self.wilaya