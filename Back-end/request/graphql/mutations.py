import graphene
from request.forms import RequestForm
from graphene_django.forms.mutation import DjangoFormMutation
from .types import RequestType
from request.models import Request


class CreateRequestMutation(DjangoFormMutation):
    class Meta():
        form_class = RequestForm

class UpdateRequestMutation(graphene.Mutation):
    class Arguments:
        id     = graphene.ID()
        status = graphene.String()

    request = graphene.Field(RequestType)

    def mutate(root,info,id,status):
        user = info.context.user
        if user.Type.VENDOR:
            try:
                request_obj = Request.objects.filter(id=id).get()
                if request_obj.product.vendor.username == user.username:
                    request_obj.status = status
                    request_obj.save()
                    return UpdateRequestMutation(request=request_obj)
            except :
                return {"errors":"please enter a valid choice"}


class RequestMutations(graphene.ObjectType):
    create_request = CreateRequestMutation.Field()
    update_request = UpdateRequestMutation.Field()