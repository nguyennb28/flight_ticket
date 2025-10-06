from rest_framework import serializers
from .models import AccessInfor

class AccessInforSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccessInfor
        fields = "__all__"