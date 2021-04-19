from django.db import models
from django.db.models import Count
from product.models import Product

class QuerySets(models.QuerySet):
    def total_date(self,date):
        all_day_request = self.filter(date=date)
        total = all_day_request.count()
        return total
    def get_by_category(self,cat):
        category = self.filter(products__category__category=cat)
        return category
    def get_by_parent_category(self,cat):
        parent_category = self.filter(product__category__parent_category=cat)
        return parent_category
    def get_by_vendor(self,vendor):
        return self.filter(product__vendor=vendor)
    def group_and_order_by(self,group):
         return self.values(group).annotate(dcount=Count(group)).order_by('-dcount')
    def get_high_buy(self,num):
        product_count = self.group_and_order_by(group='product')
        i = 0
        product_arr = [] 
        for i in range(num):
            try:
                product_id   = product_count[i]['product']
                product_info = Product.objects.filter(id=product_id).values('id','image','name','rating').get()
                product_arr.append(product_info)
                i += 1
            except :
                product_arr = None
        return product_arr         


class RequestManager(models.Manager):
    def get_queryset(self):
        return QuerySets(self.model, using=self._db)
    def total_date(self,date):
        return self.get_queryset().total_date(date)
    def get_by_category(self,cat):
        return self.get_queryset().get_by_category(cat)
    def get_by_parent_category(self,cat):
        return self.get_queryset().get_by_parent_category(cat)
    def get_by_vendor(self,username):
        return self.get_queryset().get_by_vendor(username)
    def group_and_order_by(self,group):
        return self.get_queryset().group_and_order_by(group)
    def get_high_buy(self,num):
        return self.get_queryset().get_high_buy(num)