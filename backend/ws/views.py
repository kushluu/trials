from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from users.models import User
from users.serializers import UserSerializer


def chat_view(request):
    return render(request, 'chat.html')


# @authentication_classes([])
class index(APIView):
    def get(self, request):
        return render(request, 'index.html')


class get_user(APIView):
    def post(self, request):
        users = User.objects.filter(u_name__icontains=request.data.get('name'))
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
