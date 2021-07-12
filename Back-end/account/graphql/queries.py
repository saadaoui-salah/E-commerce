import graphene
from account.models import Vendor,MultiVendor,Vendor,Costumer
from .types import UserListType


class ProfileAdminQuery(object):

    vendors_list  = graphene.List(UserListType)
    consumers_list  = graphene.List(UserListType)
    multi_vendor_list  = graphene.List(UserListType)

    def resolve_vendors_list(root,info):
        user = info.context.user
        if user.Type.MULTI_VENDOR:
            return Vendor.objects.filter(user_multi_vendor__id=user.id,is_sub_vendor=True)
        if user.Type.ADMIN:
            return Vendor.objects.all()
        return None

    def resolve_consumers_list(root,info):
        user = info.context.user
        if user.Type.VENDOR:
            vendor = Vendor.objects.filter(id=user.id)
            if not vendor.is_sub_vendor :
                return Costumer.objects.filter(user_vendor__id=user.id)
        if user.Type.MULTI_VENDOR:
            return Costumer.objects.filter(user_vendor__id=user.id)
        if user.Type.ADMIN:
            return Costumer.objects.all()
        return None

    def resolve_multi_vendors_list(root,info):
        user = info.context.user
        if user.Type.ADMIN:
            return MultiVendor.objects.all()
        return None
