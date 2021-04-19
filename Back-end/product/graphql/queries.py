import graphene
from product.models import Product, Category, ProductInfo
from .types import ProductInfoType,ProductType,CategoryType
from signals import object_viewed_signal

# Product/category/ProductInfo Queries
class CategoryQuery(graphene.ObjectType):
    
    category_list   = graphene.List(CategoryType)
    get_by_category = graphene.List(ProductType,cat=graphene.String())
    
    def resolve_category_list(root,info):
        return Category.objects.filter(parent_category= not None)

    def resolve_get_by_category(root,info,cat):
        return Product.objects.get_by_category(cat)

class ProductInfoQuery(graphene.ObjectType):
    
    top_rating    = graphene.List(ProductType)
    get_product_info  = graphene.List(ProductInfoType,product_id=graphene.ID())
    
    def resolve_top_rating(root,info):
        return Product.objects.get_top_rating(10) 
    def resolve_get_product_info(root,info,product_id):
        return list(ProductInfo.objects.filter(product_id=product_id))


class ProductQuery(graphene.ObjectType):
    get_vendor_products = graphene.List(ProductType)
    get_product         = graphene.List(ProductType,id=graphene.ID())
    def resolve_get_vendor_products(root,info):
        user = info.context.user
        if user.is_authenticated:
            if user.Type.VENDOR:
                return Product.objects.filter(vendor=user)
        return Product.objects.none() 
    def resolve_get_product(root,info,id):
        instance = Product.objects.filter(id=id)
        object_viewed_signal.send(sender=instance.get().__class__,instance=instance.get(),request=info.context)
        try:
            return instance
        except:    
            return Product.objects.none() 


class ProductAppQuery(
    CategoryQuery,
    ProductInfoQuery,
    ProductQuery,):
    pass