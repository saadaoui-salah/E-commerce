from product.models import ProductInfo, Product

class ProductManagerTest():

    def test_product_managers(self):
        # querysets
        category_filter = Product.objects.get_by_category("t-shirt")
        parent_category_filter = list(Product.objects.get_by_parent_category("test"))
        top_rating = Product.objects.get_top_rating(1)[0]
        # real resutls
        category_result = list(category_filter)[0].get_category == "t-shirt"
        parent_category_result = parent_category_filter[0].get_parent_category == "test"
        top_rating_result = Product.objects.all().order_by('-rating')[0]  
        # runing tests
        if category_result and parent_category_result and top_rating_result:
            print("""
            ##########################################
            ### Product Managers Test Run Correctly ##
            ##########################################
            """)
        elif category_result == False:
            print("""
            ##########################################
            ######## Check get_by_category func ######
            ##########################################
            """)
        elif parent_category_result == False:
            print("""
            ##########################################
            ### Check get_by_parent_category func ####
            ##########################################
            """)
        elif top_rating_result == False:
            print("""
            ##########################################
            ######## Check get_top_rating func #######
            ##########################################
            """)
    
class ProductInfoManagerTest():
    def setup(self):
        self.manager_rating_arr = ProductInfo.objects.get_rating_by_product_id(1)

    def run_test(self):

        if len(self.manager_rating_arr) > 0 or self.manager_rating_arr == []:
            print("""
            ###########################################
            # ProductInfo Managers Test Run Correctly #
            ###########################################
            """)
        else:
            print("""
            ###########################################
            #### Check get_rating_by_product func #####
            ###########################################
            """)

    
class ManagersTest(
    ProductManagerTest,
    ProductInfoManagerTest):
    pass