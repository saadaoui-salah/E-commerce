from graphql_auth.schema import UserQuery, MeQuery
from account.graphql.queries import ProfileAdminQuery
from account.graphql.mutations import AuthMutation
from request.graphql.queries import RequestQuery
from request.graphql.mutations import RequestMutations
from product.graphql.queries import ProductAppQuery
from product.graphql.mutations import ProductAppMutation
from pub.graphql.queries import PubQuery
from pub.graphql.mutations import PubMutations
from graphene import Schema, ObjectType



class Query(
    ProductAppQuery,
    ProfileAdminQuery,
    RequestQuery,
    UserQuery, 
    PubQuery,
    MeQuery,
    ObjectType):
    pass

class Mutations(
    RequestMutations,
    ProductAppMutation, 
    PubMutations,
    AuthMutation,
    ObjectType):
    pass


schema = Schema(query=Query, mutation=Mutations) 
