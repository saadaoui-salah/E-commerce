import graphene
from graphene_django.forms.mutation import DjangoFormMutation
from .types import PubType
from pub.models import Pub
from pub.forms import PubForm

class CreatePubMutation(DjangoFormMutation):
    class Meta:
        form_class = PubForm

class UpdatePubMutation(graphene.Mutation):
    class Arguments:
        id       = graphene.ID()
        link_to  = graphene.String()
        image    = graphene.String()
        offres   = graphene.Int()
        category = graphene.String()

    pub = graphene.List(PubType)

    def mutate(root,info,id,link_to,image,offres,category):
        user = info.context.user
        if user.Type.VENDOR:
            try:
                pub_obj = Pub.objects.filter(id=id).get()
                if pub_obj.vendor.user == user:
                    pub_obj.link_to = link_to
                    pub_obj.image = image
                    pub_obj.offres = offres
                    pub_obj.category = category
                    pub_obj.save()
                    return UpdatePubMutation(pub=pub_obj)
                return {'errors':'Invalid User'}
            except:
                return {'errors':'Request Invalid'}
        return {'errors':'Invalid User'}
                
class DeletePubMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    pub = graphene.List(PubType)
    errors = graphene.String()
    succes = graphene.Boolean()

    def mutate(root,info,id):
        user = info.context.user
        if user.Type.VENDOR:
            try:
                pub_obj = Pub.objects.filter(id=id).get()
                
                if pub_obj.vendor.id == user.id:
                    pub_obj.delete()
                    return DeletePubMutation(pub=None,succes=True)
                return DeletePubMutation(errors='Invalid User',succes=False)
            except:
                return DeletePubMutation(errors='Invalid Request',succes=False)
        return DeletePubMutation(errors='Invalid User',succes=False)
                
class PubMutations(graphene.ObjectType):
    create_pub = CreatePubMutation.Field()
    update_pub = UpdatePubMutation.Field()
    delete_pub = DeletePubMutation.Field()