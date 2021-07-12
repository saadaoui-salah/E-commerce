import graphene
from graphene_django.forms.mutation import DjangoFormMutation
from product.forms import ProuctInfoForm, ProductForm
from product.models import Product, Category
from .types import ProductType, ProductInfoType, CategoryType

########### Catgeory Crud mutation
class CreateCategoryMutation(graphene.Mutation):
    class Arguments:
        category = graphene.String()
        parent_category = graphene.ID(required=False)
    
    category = graphene.Field(CategoryType)
    errors = graphene.String()
    succes = graphene.Boolean()

    def mutate(root, info, category, parent_category=None):
        user = info.context.user
        print(category)
        if user.Type.VENDOR or user.Type.MULTIVENDOR or user.Type.ADMIN:
            if parent_category:
                category = Category.objects.create(category=category) 
                return CreateCategoryMutation(category=category, succes=True)
            category = Category.objects.create(category=category, parent_category=parent_category) 
            return CreateCategoryMutation(category=category, succes=True)
        return CreateCategoryMutation(error="Invalid User", succes=False)

class CategoryMutation(graphene.ObjectType):
    create_category      = CreateCategoryMutation.Field()

########### PRODUCT CRUD MUTATIONS
class CreateProductMutation(DjangoFormMutation):
    class Meta:
        form_class = ProductForm


class UpdateProductMutation(graphene.Mutation):
    class Arguments:
        id           = graphene.ID()
        name         = graphene.String()
        price_vender = graphene.Float()
        price_achat  = graphene.Float()
        detail       = graphene.String()
        quantity      = graphene.Int()
        image        = graphene.String()
    
    product = graphene.Field(ProductType)
    errors = graphene.String()
    succes = graphene.Boolean()

    def mutate(root,info,id,name,price_vender,image,price_achat,detail,quantity):   
        user  = info.context.user
        if user.Type.VENDOR:
            try:############## image
                product_obj = Product.objects.filter(id=id).get()
                if product_obj.user.user == user:
                    product_obj.name = name
                    product_obj.price_vender = price_vender
                    product_obj.price_achat = price_achat
                    product_obj.detail = detail
                    product_obj.quantity = quantity  
                    product_obj.image = image  
                    product_obj.save()
                    return UpdateProductMutation(product=product_obj,succes=True)
                return UpdateProductMutation(errors="Invalid User",succes=False)                    
            except:
                return UpdateProductMutation(errors="Invalid Request",succes=False)
        return UpdateProductMutation(errors="Invalid User",succes=False)                    


class DeleteProductMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    product = graphene.List(ProductType)
    errors = graphene.String()
    succes = graphene.Boolean()
    
    def mutate(root, info, id):
        user = info.context.user
        if user.Type.VENDOR:
            try:
                product_obj = Product.objects.get(pk=id)
                if product_obj.user_id == user.id:
                    product_obj.delete()

                    return DeleteProductMutation(product_obj=None,succes=False)
                return DeleteProductMutation(errors="Invalid User",succes=False)                    
            except:
                return DeleteProductMutation(errors="Invalid Request",succes=False)
        return DeleteProductMutation(errors="Invalid User",succes=False)                    


class ProductMutation(graphene.ObjectType):
    create_product      = CreateProductMutation.Field()
    update_product      = UpdateProductMutation.Field()
    delet_product       = DeleteProductMutation.Field()                


############### PRODUCTINFO CRUD MUTATIONS
class CreateProductInfoMutation(DjangoFormMutation):
    class Meta:
        form_class = ProuctInfoForm 
                    

class UpdateProductInfoMutation(graphene.Mutation):
    class Arguments:
        product  = graphene.ID()
        rating   = graphene.Int()
        comment  = graphene.String()

    product_info = graphene.Field(ProductInfoType)
    errors = graphene.String()
    succes = graphene.Boolean()
    
    def mutate(root,info,rating,comment,id):
        user = info.context.user
        if user.is_authenticated and user.Type.CONSUMER:
            try:
                product_info_obj = ProductInfo.objects.filter(id=id)
                if product_info_obj.user_id == user.id and product:
                    porduct_info_obj.rating = rating
                    porduct_info_obj.comment = comment
                    porduct_info_obj.save()
                    return UpdateProductInfoMutation(product=product_obj,succes=True)
                return UpdateProductInfoMutation(errors="Invalid User",succes=False)                    
            except:
                return UpdateProductInfoMutation(errors="Invalid Request",succes=False)
        return UpdateProductInfoMutation(errors="Invalid User",succes=False)                    


class DeleteProductInfoMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    product_info = graphene.Field(ProductInfoType)
    errors = graphene.String()
    succes = graphene.Boolean()

    def mutate(root,info,id):
        user = info.context.user
        if user.is_authenticated and user.Type.CONSUMER:
            try:
                product_info_obj = get_object_or_404(ProductInfo,id=id)
                if product_info.user_id == user.id:
                    product_info_obj.delete()             
                    return DeleteProductInfoMutation(product_info=None,succes=True)
                return DeleteProductInfoMutation(errors="Invalid Request",succes=False)
            except:
                return DeleteProductInfoMutation(errors="Invalid Request",succes=False)
        return DeleteProductInfoMutation(errors="Invalid User",succes=False)                    


class ProductInfoMutations(graphene.ObjectType): 
    create_product_info = CreateProductInfoMutation.Field()
    update_product_info = UpdateProductInfoMutation.Field()
    delet_product_info  = DeleteProductInfoMutation.Field()


# Mutations
class ProductAppMutation(
    ProductInfoMutations,
    ProductMutation,
    CategoryMutation
    ):
   pass


