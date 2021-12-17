from django.urls import path

from articleapp.views import ArticleCreateAPIView

urlpatterns = [
    path('', ArticleCreateAPIView.as_view(), name='create'),
]