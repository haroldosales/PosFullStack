import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}
//test
class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: const Text("Ola"),
          ),
          body: TextField(
            decoration:
                const InputDecoration(labelText: "Add", icon: Icon(Icons.add)),
            onChanged: (value) {
              
            },
          )),
    );
  }
}
