from utils import rename_image
from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import User,Profile


@receiver(post_save, sender=User)
def create_user_signal(instance, created, *args, **kwargs):
    if created:
        print(instance)
        profile = Profile.objects.create(
            user=instance,
            )
        profile.save()
        return True
    return False

@receiver(post_save, sender=Profile)
def create_profile_singal(instance, created, *args, **kwargs):
    if created:
        username = instance.user.username
        rename_image(instance=instance,img_name=username,dir="profile")
        instance.save()