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
            'parent_category',
            'quantity',
            )

class CategoryInputType(graphene.InputObjectType):
    id = graphene.ID()
    category = graphene.String()

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = (
            'id',
            'category',
            'parent_category',
            )

class ProductInfoType(DjangoObjectType):
    class Meta:
        model  = ProductInfo
        fields = (
            'consumer',
            'comment',
            'product',
            'rating',
            'date'
        )
