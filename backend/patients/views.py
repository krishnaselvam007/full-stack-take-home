from rest_framework import viewsets

from patients.models import Patient
from patients.serializers import PatientSerializer


class PatientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Patients to be viewed or edited.
    """
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer