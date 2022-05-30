
from django.contrib import admin
from django.urls import path
from weeblab import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index),
    path('prototype2.html',views.index),
    path('prototype1.html',views.about),
    path('Cab.html',views.cab),
   
]