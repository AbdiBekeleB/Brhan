from rest_framework import viewsets, status 
from rest_framework.decorators import action 
from rest_framework.response import Response 
from django.shortcuts import get_object_or_404 
from .models import Item 
from .serializers import ItemSerializer 
 
class ItemViewSet(viewsets.ModelViewSet): 
    queryset = Item.objects.all() 
    serializer_class = ItemSerializer 
 
    @action(detail=False, methods=['get']) 
    def all_items(self, request): 
        items = self.get_queryset() 
        serializer = self.get_serializer(items, many=True) 
        return Response(serializer.data) 
 
    @action(detail=False, methods=['get']) 
    def search_by_name(self, request): 
        name = request.query_params.get('name', None) 
        if name: 
            items = Item.objects.filter(name__icontains=name) 
        else: 
            items = Item.objects.all() 
        serializer = self.get_serializer(items, many=True) 
        return Response(serializer.data) 
 
    @action(detail=False, methods=['get']) 
    def search_by_description(self, request): 
        description = request.query_params.get('description', None) 
        if description: 
            items = Item.objects.filter(description__icontains=description) 
        else: 
            items = Item.objects.all() 
        serializer = self.get_serializer(items, many=True) 
        return Response(serializer.data) 
 
    def create(self, request): 
        serializer = self.get_serializer(data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_201_CREATED) 
        else: 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    def update(self, request, pk=None): 
        item = self.get_object() 
        serializer = self.get_serializer(item, data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        else: 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    def destroy(self, request, pk=None): 
        item = self.get_object() 
        item.delete() 
        return Response(status=status.HTTP_204_NO_CONTENT)