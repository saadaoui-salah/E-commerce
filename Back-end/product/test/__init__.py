from .models import CategoryTest, ProductTest, ProductInfoTest


def test(Test):
    test = Test()
    test.setUp()
    test.cleanUp()

test(CategoryTest)
test(ProductTest)
test(ProductInfoTest)