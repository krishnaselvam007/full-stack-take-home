from django.db import models


class Appointment(models.Model):
    availability = models.ForeignKey(
        'availabilities.Availability',
        on_delete=models.CASCADE,
    )
    clinician = models.ForeignKey(
        'clinicians.Clinician',
        on_delete=models.CASCADE,
    )
    patient = models.ForeignKey(
        'patients.Patient',
        on_delete=models.CASCADE,
    )