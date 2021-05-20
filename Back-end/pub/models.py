from django.db import models
from .managers import PubManager


class Pub(models.Model):
    class OffersChoices(models.IntegerChoices):
        ONE_MONTHE     = 30
        TWO_MONTHES    = 60
        THREE_MONTHES  = 90
    class PubChoices(models.TextChoices):
        HOME = 'home'
        CARD = "card"

    vendor   = models.ForeignKey("account.Vendor", on_delete=models.CASCADE)
    category = models.CharField(choices=PubChoices.choices, max_length=10)
    active   = models.BooleanField(default=True)
    offres   = models.IntegerField(choices=OffersChoices.choices)
    image    = models.ImageField(upload_to="pubs")
    link_to  = models.CharField(max_length=2000,null=True,blank=True)
    date     = models.DateField(auto_now_add=True)
    objects  = PubManager()
    def __str__(self):
        return self.category
    
class PubsTotalStats(models.Model):
    total_pub = models.IntegerField()
    date = models.DateField()
    def __str__(self):
        return self.total_pub
    
class PubStats(models.Model):
    consumer = models.ForeignKey("account.Costumer", null=True, blank=True,on_delete=models.SET_NULL)
    pub      = models.ForeignKey(Pub, on_delete=models.CASCADE)
    clicks   = models.PositiveIntegerField(default=0)
    views    = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return str(self.clicks)
    