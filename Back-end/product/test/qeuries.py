import json
from graphene_django.utils.testing import GraphQLTestCase

class ProductAppQueryTest(GraphQLTestCase):
    def categroy_query_test(self):
        response = self.query(
            """
            query{
                categoryList{
                    category
                    parent_category
                }
                  getByCategory(cat: "serwal") {
                    id
                    priceVender
                    image
                    name
                }
            }

            """,op_name='myModel'
        )
        self.client = None
        content = json.loads(response.content)
        self.assertResponseNoErrors(response)

    def product_info_query_test(self):
        self.client = None
        response = self.query(
            """
            query{
                topRating{
                    name
                    rating
                }
                getProductInfo(product_id:3){
                    name
                }
            }
            """,
            op_name='ProducInfo'
        )