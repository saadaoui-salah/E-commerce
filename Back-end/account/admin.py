from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Feature,Adresse,MultiVendor,User,Vendor,Costumer
from django.apps import apps
# Register your models here.

app = apps.get_app_config('graphql_auth')

for model_name,model in app.models.items():
    admin.site.register(model)

admin.site.register(Adresse)
admin.site.register(MultiVendor)
admin.site.register(User)
admin.site.register(Feature)
admin.site.register(Vendor)
admin.site.register(Costumer)
