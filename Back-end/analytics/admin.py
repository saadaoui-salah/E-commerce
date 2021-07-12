from django.contrib import admin
from .models import ContentViewed,UsersStats, ShopTimeStats, ProductsStats, RequestsStats

admin.site.register(UsersStats)
admin.site.register(ContentViewed)
admin.site.register(ShopTimeStats)
admin.site.register(ProductsStats)
admin.site.register(RequestsStats)