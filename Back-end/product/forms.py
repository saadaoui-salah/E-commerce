from django import forms
from .models import Product,Category,ProductInfo

class ProductForm(forms.ModelForm):
    class Meta():
        model  = Product
        fields = [
            'vendor',
            'category',
            'name',
            'price_vender',
            'price_achat',
            'detail',
            'image',
            'quantity'
        ]


class ProuctInfoForm(forms.ModelForm):
    class Meta():
        model  = ProductInfo
        fields = [
            'consumer',
            'product',
            'rating',
            'comment'
        ] 