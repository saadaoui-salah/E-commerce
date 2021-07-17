from django import forms
from .models import Product,Category,ProductInfo

class ProductForm(forms.ModelForm):
    class Meta():
        model  = Product
        fields = [
            'price_vender',
            'price_achat',
            'detail',
            'quantity',
            'image'
        ]

class CategoryForm(forms.ModelForm):
    class Meta():
        model  = Category
        fields = [
            'category',
            'parent_category',
            'image'
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