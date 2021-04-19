from django.test import TestCase
from product.models import Category, Product, ProductInfo, Cobon
from account.models import Vendor

class CategoryTest(TestCase):
    
    def category_model_test(self,category):
        self.category = category
        self.category_obj = Category.objects.create(category=self.category)
        self.assertEqual(
            self.category_obj.category,
            self.category,
            msg="## Create Catgery")

class ProductTest(CategoryTest):
    
    def product_model_test(self,product):
        self.vendor = Vendor.objects.first()
        self.new_product = Product.objects.create(
            user = self.vendor,
            name=product,
            price_achat=200,
            price_vender=300,
            category=self.category_obj,
            quantity=20,
        )
        self.new_product.save()
        self.assertEqual(
            self.new_product.name,
            product,
            msg="## Create Product")

    def product_methods_test(self):

        self.assertEqual(
            self.new_product.get_benefits,
            100,
            msg="## test benefits model method")
        self.assertEqual(
            self.new_product.get_category,
            self.category_obj.category,
            msg="## test get_category model method")

class ProductInfoTest(ProductTest):
    def product_info_model_test(self):
        self.new_product_info = ProductInfo.objects.create(
            user = Profile.objects.filter(user__type="COSTUMER")[0],
            product = self.new_product,
            comment = "this a test comment"            
        )
        self.new_product_info.save()
        self.assertEqual(
            self.new_product_info.comment,
            "this a test comment",
            msg="## product info model test"
            )        
    
class CobonTest(ProductInfoTest):
    def cobon_model_test(self):
        self.new_cobon = Cobon.objects.create(
            product=self.new_product,
            key="MSJKJMM",
            percentage="20"
        )
        self.new_cobon.save()
        self.assertEqual(
            self.new_cobon.key,
            "MSJKJMM",
            msg="## cobon model test"
            )        

class ModelsTest(CobonTest):
    pass