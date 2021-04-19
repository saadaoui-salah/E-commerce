from account.models import User, Vendor
from graphene_django import DjangoObjectType


class UserListType(DjangoObjectType):
    class Meta:
        model = User
        fields = (
            "first_name",
            "last_name",
            "birthday",
            "phone_number",
            "addresse",
            "image",
            "type",
            "features",
            "user_multi_vendor",
            "user_vendor",
        )


class SubVendor(DjangoObjectType):
    class Meta:
        model = Vendor