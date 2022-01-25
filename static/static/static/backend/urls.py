from backend.views import RouteViewSet
from rest_framework.routers import DefaultRouter
from backend import views

router = DefaultRouter()
router.register(r'routes', views.RouteViewSet, basename='route')
urlpatterns = router.urls