from django.test import TestCase
from account.models import User,Profile,Adresse
from django.utils.timezone import now
class ModelsTest(TestCase):

    def test_user_create(self):
        user = User.objects.create(
            username="test",
            type=User.Type.VENDOR
            )
        self.assertEqual(user.username,"test",msg="### User Model test")
        self.assertEqual(user.type,User.Type.VENDOR,msg="### User type test")
        
        