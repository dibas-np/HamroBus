from backend.views import RouteViewSet,ContactViewSet, LoggedUserViewSet, TicketViewSet, NewsLetterViewSet, SystemInfoViewSet
from rest_framework.routers import DefaultRouter
from backend import views
from django.urls import path, re_path
from backend.home import homeView
from django.contrib.auth.decorators import login_required

router = DefaultRouter()
router.register(r'routes', views.RouteViewSet, basename='route')
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'loggeduser', views.LoggedUserViewSet, basename='loggeduser')
router.register(r'tickets', views.TicketViewSet, basename='ticket')
router.register(r'newsletter', views.NewsLetterViewSet, basename='newsletter')
router.register(r'systeminfo', views.SystemInfoViewSet, basename='systeminfo')
router.register(r'contacts', views.ContactViewSet, basename='contact')
urlpatterns = router.urls

urlpatterns += [
    # match the root
    re_path(r'^$', login_required((homeView),login_url='login')),
    # match all other pages
    re_path(r'^(?:.*)/?$', login_required((homeView),login_url='login')),
]