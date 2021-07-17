from django.test import TestCase
from account.models import User, SubVendor, Vendor, Costumer, MultiVendor



class ModelsTest(TestCase):
    def setUp(self):
        self.vendor = Vendor.objects.create(
            username="vendor",
            email="vendor@gmail.com"
            )
        self.multi_vendor = MultiVendor.objects.create(
            username="MultiVendor",
            email="MultiVendor@gmail.com"
            )
        self.costumer = Costumer.objects.create(
            username="Costumer",
            email="Costumer@gmail.com",
            user_vendor=self.vendor
            )
        self.sub_vendor = SubVendor.objects.create(
            username="SUB VENDOR",
            email="SUB@gmail.com",
            user_multi_vendor=self.multi_vendor
            )
        self.vendor.set_password("test")
        self.multi_vendor.set_password("test")
        self.costumer.set_password("test")

    def test_vendor(self):
        self.assertEqual(self.vendor.username, "vendor", msg="### vendor Model test")
        self.assertEqual(self.vendor.type, User.Type.VENDOR, msg="### vendor type test")
        self.assertTrue(self.vendor.is_vendor)
        self.assertFalse(self.vendor.is_multi_vendor)
        self.assertFalse(self.vendor.is_admin)
        self.assertFalse(self.vendor.is_costumer)
        #self.assertFalse(self.vendor.is_sub_vendor)
    
    def test_multi_vendor(self):
        self.assertEqual(self.multi_vendor.username, "MultiVendor", msg="### MultiVendor Model test")
        self.assertEqual(self.multi_vendor.type, User.Type.MULTI_VENDOR, msg="### MultiVendor type test")
        self.assertTrue(self.multi_vendor.is_multi_vendor)
        self.assertFalse(self.multi_vendor.is_vendor)
        self.assertFalse(self.multi_vendor.is_admin)
        self.assertFalse(self.multi_vendor.is_costumer)
        #self.assertFalse(self.multi_vendor.is_sub_vendor)

    def test_sub_vendor(self):
        self.assertEqual(self.sub_vendor.username, "SUB VENDOR", msg="### sub vendor Model test")
        self.assertEqual(self.sub_vendor.type, User.Type.VENDOR, msg="### sub vendor type test")
        self.assertTrue(self.sub_vendor.is_vendor)
        self.assertFalse(self.sub_vendor.is_multi_vendor)
        self.assertFalse(self.sub_vendor.is_admin)
        self.assertFalse(self.sub_vendor.is_costumer)
        #self.assertFalse(self.sub_vendor.is_sub_vendor)
        
    def test_costumer(self):
        self.assertEqual(self.costumer.username, "Costumer", msg="### Costumer Model test")
        self.assertEqual(self.costumer.type, User.Type.CONSUMER, msg="### Costumer type test")
        self.assertTrue(self.costumer.is_costumer)
        self.assertFalse(self.costumer.is_vendor)
        self.assertFalse(self.costumer.is_admin)
        self.assertFalse(self.costumer.is_multi_vendor)
        #self.assertFalse(self.multi_vendor.is_sub_vendor)
    
    def cleanUp(self):
        self.vendor.delete()
        self.multi_vendor.delete()
        self.costumer.delete()