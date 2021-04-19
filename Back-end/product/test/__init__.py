from .models import ModelsTest
from .managers import ManagersTest
from .qeuries import ProductAppQueryTest

def test_models(category,product):
    test = ModelsTest()
    test.category_model_test(category=category)
    test.product_model_test(product=product)
    test.product_methods_test()
    test.product_info_model_test()
    test.cobon_model_test()

def test_managers():
    test = ManagersTest()
    test.test_product_managers()
    test.setup()
    test.run_test()

#test_models("choese","adidas choese")
#test_managers()

test = ProductAppQueryTest()
test.categroy_query_test()
test.product_info_query_test()