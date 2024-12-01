import 'package:app_list/pages/search.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          colorScheme:
              ColorScheme.fromSeed(seedColor: const Color.fromARGB(255, 40, 20, 80)),
          textTheme: GoogleFonts.acmeTextTheme()),
      home: Scaffold(
          appBar: AppBar(
              title: const Text(
            "App with dart search",
            style: TextStyle(fontSize: 48, fontStyle: FontStyle.italic),
          )),
          bottomNavigationBar: BottomNavigationBar(
            items: const [
              BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.search), label: "Search"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.person), label: "Profile")
            ],
          ),
          body:
              const Padding(padding: EdgeInsets.all(4.0), child: SearchPage())),
    );
  }
}
