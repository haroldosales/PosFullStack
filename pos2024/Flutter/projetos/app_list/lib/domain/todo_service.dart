import 'dart:convert';

import 'package:app_list/model/todo.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

Future<List<TodoItem>> fetchItems() async {
  final response =
      await http.get(Uri.parse('https://jsonplaceholder.typicode.com/todos'));

  return switch (response.statusCode) {
    200 => (jsonDecode(response.body) as List<dynamic>)
        .map((Element) => TodoItem.fromJson(Element as Map<String, dynamic>))
        .toList(),
    _ => throw Exception("Nao foi possivel carregar os items")
  };
}

Future<List<TodoItem>> searchItems(String query) async {
  final response =
      await http.get(Uri.parse('https://jsonplaceholder.typicode.com/todos'));

  return switch (response.statusCode) {
    200 => (jsonDecode(response.body) as List<dynamic>)
        .map((Element) => TodoItem.fromJson(Element as Map<String, dynamic>))
        .where((item) => item.title.contains((query)))
        .toList(),
    _ => throw Exception("Nao foi possivel carregar os items")
  };
}
