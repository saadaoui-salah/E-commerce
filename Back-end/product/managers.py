from django.db import models

class QuerySets(models.QuerySet):
    def get_by_category(self,category): # USED
        return self.filter(category__category=category)
    def get_top_rating(self,num): # USED
        return self.order_by('-rating')[0:num]
    def get_by_parent_category(self,category):
        return self.filter(category__parent_category__category=category)
    def get_rating_by_product_id(self,id): # USED
        all_ratings = list(self.filter(product_id=id).values('rating'))
        rating_arr = [rating['rating'] for rating in all_ratings]
        return rating_arr


class ProductManager(models.Manager):
    def get_queryset(self):
        return QuerySets(self.model, using=self._db)
    def get_by_category(self,category):
        return self.get_queryset().get_by_category(category)
    def get_by_parent_category(self,parent_category):
        return self.get_queryset().get_by_parent_category(parent_category)
    def get_top_rating(self,num):
        return self.get_queryset().get_top_rating(num)
    
    
class ProductInfoManager(models.Manager):
    def get_queryset(self):
        return QuerySets(self.model, using=self._db)
    def get_rating_by_product_id(self,id): # USED
        return self.get_queryset().get_rating_by_product_id(id)
