import graphene
from graphene_django import DjangoObjectType
from request.models import Request

class RequestFilter(graphene.ObjectType):
    id     = graphene.Int()
    image  = graphene.String()
    name   = graphene.String()
    rating = graphene.Int()

class RequestType(DjangoObjectType):
    class Meta:
        model  = Request
        fields = (
            'id',
            'product',
            'phone_number',
            'adresse',
            'status',
            'costumer',
        )