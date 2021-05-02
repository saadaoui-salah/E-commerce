import graphene
from graphene_django import DjangoObjectType
from pub.models import Pub

class PubType(DjangoObjectType):
    class Meta:
        model = Pub
        fields = (
            'id',
            'image',
            'views',
            'link_to'
        )