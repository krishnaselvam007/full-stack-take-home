from rest_framework import serializers

from patients.models import Patient


class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient
        fields = ['id','name']