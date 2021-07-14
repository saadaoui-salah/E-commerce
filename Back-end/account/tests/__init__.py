from .model import ModelsTest

test = ModelsTest()
test.setUp()
test.test_vendor()
test.test_multi_vendor()
test.test_costumer()
test.cleanUp()