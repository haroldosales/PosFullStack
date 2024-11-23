import 'package:app_list/pages/search.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(title: const Text("App with dart search")),
          bottomNavigationBar: BottomNavigationBar(
            // onTap: (index) {
            //   switch (index) {
            //     case 0:
            //       _router.pushNamed('home');
            //       break;
            //     case 1:
            //       _router.pushNamed('search');
            //       break;
            //     case 2:
            //       _router.pushNamed('profile');
            //       break;
            //   }
            // },
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
