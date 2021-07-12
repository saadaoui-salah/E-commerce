from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from product.models import Category, Product, ProductInfo
from account.models import Vendor, Costumer


class CategoryTest(TestCase):
    
    def setUp(self):
        self.category = Category.objects.create(category="category test")
        self.assertTrue(
            isinstance(self.category, Category),
            msg="## Error accured in Category model"
            )
        self.assertEqual(str(self.category), "category test", msg="## Error accured in Category model")

    def cleanUp(self):
        self.category.delete()


class ProductTest(TestCase):
    
    def setUp(self):
        tets_parent_category = Category.objects.filter(parent_category=None).first()
        tets_category = Category.objects.filter(parent_category=(not None)).first()
        tets_vendor = Vendor.objects.first()
        tets_image = SimpleUploadedFile(
            name='product_test.jpeg', 
            content=open("./product/test/product_test.jpeg", 'rb').read(), 
            content_type='image/jpeg')
        self.product = Product.objects.create(
            vendor= tets_vendor,
            parent_category=tets_parent_category,
            category=tets_category,
            name="test product",
            price_vender=200,
            price_achat=150,
            detail="some details ...",
            image= tets_image,
            quantity=50
            )
        self.assertTrue(
            isinstance(self.product, Product),
            msg="## Error accured in Product model"
        )
        self.assertEqual(str(self.product), "test product", msg="## Error accured in Product model")
        self.assertEquals(
            self.product.get_benefits,
            float(50),
            msg="Error accured in get_benifits property"
        )

    def cleanUp(self):
        self.product.delete()


class ProductInfoTest(TestCase):
    def setUp(self):
        costumer = Costumer.objects.first()
        product = Product.objects.first()
        self.info = ProductInfo.objects.create(
            costumer = costumer,
            product = product,
            rating = 5,
            comment = "These a comment for test"  
        )
        self.assertTrue(
            isinstance(self.info, ProductInfo),
            msg="## Error accured in ProductInfo model"
        )
        self.assertEqual(
            str(self.info),
            costumer.username,
            msg="## Error accured in ProductInfo model"
        )

    def cleanUp(self):
        self.info.delete()