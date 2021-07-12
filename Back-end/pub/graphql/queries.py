import graphene
from pub.models import Pub
from .types import PubType


class PubQuery(graphene.ObjectType):
    
    pub_list = graphene.List(PubType)

    def resolve_pub_list(root,info):
        user = info.context.user
        return Pub.objects.get_active_pubs(user)