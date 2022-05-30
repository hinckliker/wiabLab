from django.db import models

# Create your models here.
class Users(models.Model):
  Name = models.CharField(max_length=25);
  Password = models.CharField(max_length=25);

class Like(models.Model):
  Like = models.BooleanField();
  User = models.ForeignKey(Users,on_delete = models.CASCADE)
