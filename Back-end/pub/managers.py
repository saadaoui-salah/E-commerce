from django.db import models



class QuerySets(models.QuerySet):
    def get_active_pubs(self,vendor):
        return self.filter(vendor=vendor,active=True)


class PubManager(models.Manager):
    def get_queryset(self):
        return QuerySets(self.model, using=self._db)
    def get_active_pubs(self,vendor):
        return self.get_queryset().get_active_pubs(vendor)
        