from django.test import TestCase
from product.models import Category

class CategoryTest(TestCase):
    
    def category_model_test(self):
        category = "category test"
        category_obj = Category.objects.create(category=category)
        self.assertTrue(
            isinstance(category_obj, Category),
            msg="## Create Catgery"
            )
        category_obj.delete()