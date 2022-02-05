from backend.views import RouteViewSet, LoggedUserViewSet
from rest_framework.routers import DefaultRouter
from backend import views
from django.urls import path, re_path
from backend.home import homeView

router = DefaultRouter()
router.register(r'routes', views.RouteViewSet, basename='route')
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'loggeduser', views.LoggedUserViewSet, basename='loggeduser')
urlpatterns = router.urls

urlpatterns += [
    # match the root
    re_path(r'^$', homeView),
    # match all other pages
    re_path(r'^(?:.*)/?$', homeView),
]