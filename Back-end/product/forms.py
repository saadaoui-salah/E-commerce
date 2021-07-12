from django import forms
from .models import Product,Category,ProductInfo

class ProductForm(forms.ModelForm):
    class Meta():
        model  = Product
        fields = [
            'vendor',
            'parent_category',
            'category',
            'name',
            'price_vender',
            'price_achat',
            'detail',
            'quantity'
        ]


class ProuctInfoForm(forms.ModelForm):
    class Meta():
        model  = ProductInfo
        fields = [
            'costumer',
            'product',
            'rating',
            'comment'
        ] 