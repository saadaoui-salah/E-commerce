import graphene
from graphene_django import DjangoObjectType
from product.models import Product, Category, ProductInfo

# for each model we want to return we should create a type for him

class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'image',
            'rating',
            'price_vender',
            'price_achat',
            'category',
            'quantity',
            )


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = (
            'id',
            'category',
            'image',
            )


class ProductInfoType(DjangoObjectType):
    class Meta:
        model  = ProductInfo
        fields = (
            'costumer',
            'comment',
            'product',
            'rating',
            'date'
        )
