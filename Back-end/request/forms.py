from django import forms
from .models import Request


class RequestForm(forms.ModelForm):
    class Meta():
        model  = Request
        fields = [
            'consumer',
            'product',
            'product_num',
            'phone_number',
            'adresse'
        ]
