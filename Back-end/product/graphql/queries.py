import graphene
from product.models import Product, Category, ProductInfo
from .types import ProductInfoType,ProductType,CategoryType
from signals import object_viewed_signal
from account.models import Costumer, Vendor
from request.models import Request as Order 

# Product/category/ProductInfo Queries
class CategoryQuery(graphene.ObjectType):
    
    get_categories   = graphene.List(CategoryType, parent_category_id=graphene.ID(required=False))
    get_by_category = graphene.List(ProductType,cat=graphene.String())
    
    def resolve_get_categories(root, info, parent_category_id=None):
        print(parent_category_id)
        # TODO add permissions
        return Category.objects.filter(parent_category__id=parent_category_id)

    def resolve_get_by_category(root,info,cat):
        # TODO add permissions
        return Product.objects.get_by_category(cat)

class ProductInfoQuery(graphene.ObjectType):
    
    top_rating    = graphene.List(ProductType)
    get_product_info  = graphene.List(ProductInfoType,product_id=graphene.ID())
    
    def resolve_top_rating(root,info):
        return Product.objects.get_top_rating(10) 
    def resolve_get_product_info(root,info,product_id):
        return ProductInfo.objects.filter(product_id=product_id)


class ProductQuery(graphene.ObjectType):
    get_products = graphene.List(ProductType)
    get_product  = graphene.List(ProductType,id=graphene.ID())

    def resolve_get_products(root,info):
        user = info.context.user
        if user.is_authenticated:
            if user.is_vendor:
                return Product.objects.filter(vendor=user)
            if user.is_admin:
                return Product.objects.all()
        return Product.objects.all() 
        
    def resolve_get_product(root,info,id):
        instance = Product.objects.filter(id=id)
        user = info.context.user
        if user.is_consumer or user.is_anonymous:
            object_viewed_signal.send(sender=instance.get().__class__,instance=instance.get(),request=info.context)
        try:
            return instance
        except:    
            return Product.objects.none() 

class CounterQuery(graphene.ObjectType):
    products_counter = graphene.Int()
    consumers_counter = graphene.Int()
    orders_counter = graphene.Int(required=False)
    vendors_counter = graphene.Int(required=False)
    benifits_counter = graphene.Int()

    def resolve_products_counter(self, info):
        user = info.context.user
        if user.is_authenticated:
            if user.is_vendor:
                counter = Product.objects.filter(vendor__id=user.id).count()
                return counter
            if user.is_multi_vendor:
                counter = Product.objects.filter(vendor__multi_vendor_fk__id=user.id).count()
                return counter
            if user.is_admin:
                counter = Product.objects.all().count()
                return counter
        return 0 
    def resolve_consumers_counter(self, info):
        user = info.context.user
        if user.is_authenticated:
            if user.is_vendor:
                counter = Costumer.objects.filter(vendor_fk__id=user.id).count()
                return counter
            if user.is_multi_vendor:
                counter = Costumer.objects.filter(mutlti_vendor_fk__id=user.id).count()
                return counter
            if user.is_admin:
                counter = Costumer.objects.all().count()
                return counter
        return 0
        
    def resolve_orders_counter(self, info):
        user = info.context.user
        if user.is_authenticated:
            if user.is_vendor:
                counter = Order.objects.filter(vendor__id=user.id).count()
                return counter
            if user.is_admin:
                counter = Order.objects.all().count()
                return counter
        return 0
    def resolve_vendors_counter(self, info):
        user = info.context.user
        if user.is_authenticated:
            if user.is_multi_vendor:
                counter = Vendor.objects.filter(multi_vendor_fk__id=user.id).count()
                return counter
            if user.is_admin:
                counter = Vendor.objects.all().count()
                return counter
        return 0
    def resolve_benifits_counter(self, info):
        user = info.context.user
        if user.is_authenticated:
            if user.is_vendor:
                benifits = Order.objects.filter(vendor__id=user.id).get_benifits.sum() 
                return benifits
            if user.is_admin:
                benifits = Order.objects.all().get_benifits.sum() 
                return benifits
        return 0


class ProductAppQuery(
    CategoryQuery,
    ProductInfoQuery,
    CounterQuery,
    ProductQuery,):
    pass