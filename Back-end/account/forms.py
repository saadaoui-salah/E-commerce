from django import forms
from .models import User,Profile

class UserFrom(forms.ModelForm):
    class Meta():
        model  = User 
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'password',
            'type'
            ]
    
class ProfileForm(forms.ModelForm):
    class Meta():
        model  = User 
        fields = [
            'adresse',
            'phone_number',
            'image',
            'birthday'
            ]
    