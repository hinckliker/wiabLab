from weeblab.models import Users,Like
from django.db import models

def Entry(req):
  _name = req.POST.get("name")
  _password = req.POST.get("password")
  user,created = Users.objects.get_or_create(Name = _name,Password = _password)
  print(str(user.id) +" "+ str(created))
  return True,user.id

def LikeCount(id):
  res = len(Like.objects.filter(User=id))
  return res

def AllLikeCount():
  res = len(Like.objects.all())
  return res;

def SetLike(userId):
  Like.objects.create(User=Users.objects.filter(id=userId)[0] ,Like=True)

def SetDislike(userId):
  Like.objects.filter(User=userId).delete();