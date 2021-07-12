import graphene
from request.models import Request
from .types import RequestFilter, RequestType

class RequestQuery(object):
    high_buy     = graphene.List(RequestFilter,num=graphene.Int())
    get_requests = graphene.List(RequestType) 

    def resolve_high_buy(root,info,num):
        return Request.objects.get_high_buy(num)

    def resolve_get_requests(root,info):
        user = info.context.user 
        if user.Type.VENDOR:
            return Request.objects.get_by_vendor(user)
        return Request.objects.none()