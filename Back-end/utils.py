import os
from django.conf import settings

def make_username(email):
    return email.split('@')[0].lower

    
def rename_image(instance,img_name,dir):
    if instance.image:
        initial_path = instance.image.path
        image_name = instance.image.name
        image_ext = image_name.split('.')[-1]
        instance.image.name = f'{dir}\\{img_name}.{image_ext}'
        new_path = str(settings.MEDIA_ROOT) +'\\' + instance.image.name
        # rename the photo
        os.rename(initial_path, new_path)
    return True


def get_client_ip(request):
    forward_for = request.META.get('HTTP_X_FORWARD_FOR')
    if forward_for :
        ip = forward_for.split(",")[0]
    else:
        ip = request.META.get("REMOTE_ADDR",None)
    return ip
