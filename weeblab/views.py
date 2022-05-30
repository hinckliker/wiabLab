from django.http import HttpResponse,JsonResponse
from django.shortcuts import render,redirect
from django.views.decorators.csrf import csrf_exempt
from . import telegbot,auth
from .forms import UserForm
import json


def index(request):
    request.session.flush()
    if request.GET:
      name = request.GET.__getitem__("Name")
      tel = request.GET.__getitem__("Tel") 
      mail = request.GET.__getitem__("mail")
      telegbot.SendMessage(name,mail,tel)
    return render(request, "prototype2.html")

@csrf_exempt
def about(request):  
    n=auth.AllLikeCount();
    userform = UserForm();
    message=""
    if request.POST and not request.is_ajax():
      if request.POST.__getitem__("type")=="tel":
        name = request.POST.__getitem__("Name")
        tel = request.POST.__getitem__("Tel") 
        mail = request.POST.__getitem__("mail")
        telegbot.SendMessage(name,mail,tel)
      else:
        res,id = auth.Entry(request)
        request.session['logged'] = res
        request.session['user'] = id
        request.session.modified = True
    
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
      if (request.session.get("logged",False)):
        user = request.session.get("user");
        count = auth.LikeCount(user)
        data = json.loads(request.POST.get('jsonString'))
        up =data['up']
        up = int(up) == 1
        if (count==0) and up:
          auth.SetLike(user)
        if(count !=0) and (up==False):
          print("get")
          auth.SetDislike(user)
        res = auth.AllLikeCount()
        return JsonResponse({"count":res},status=200);
        
      else:
        return JsonResponse({},status=400);
        
    if request.session.get("logged",False):
      message ="logged "+str(request.session.get('user'))
    else:
      message ="not logged"
    return render(request, "prototype1.html",{"reg":userform,"message":message,"n":n})

@csrf_exempt
def cab(request):
    if request.method == 'POST':
      if request.session.test_cookie_worked():
        request.session.delete_test_cookie()
        return HttpResponse("You're logged in.")
      else:
        return HttpResponse("Please enable cookies and try again.")
    request.session.set_test_cookie()
    return render(request, "Cab.html")


  