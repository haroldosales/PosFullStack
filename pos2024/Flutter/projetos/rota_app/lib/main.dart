import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:rota_app/pages/home.dart';
import 'package:rota_app/pages/profile.dart';
import 'package:rota_app/pages/search.dart';

void main() {
  runApp( MainApp());
}

class MainApp extends StatelessWidget {
   MainApp({super.key});

  final GoRouter _router = GoRouter(routes: [
    GoRoute(path: '/', name: 'home', builder: (context, state) => const HomePage(),),
    GoRoute(path: '/search', name: 'search', builder: (context,state) => const SearchPage(),),
    GoRoute(path: '/profile', name: 'profile', builder: (context, state) => const Profile(),)
  ]);


  @override
  Widget build(BuildContext context) {
   return MaterialApp(
      home: Scaffold(
          appBar: AppBar(title: const Text("App with dart")),
          bottomNavigationBar: BottomNavigationBar(
            onTap: (index) {
              switch(index) {
                case 0:
                  _router.pushNamed('home');
                  break;
                case 1: _router.pushNamed('search');
                  break;
                case 2: _router.pushNamed('profile');
                  break;
              }
            },
            items: const [
              BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.search), label: "Search"),
              BottomNavigationBarItem(
                  icon: Icon(Icons.person), label: "Profile")
            ],
          ),
          body: MaterialApp.router(routerConfig: _router,),

              //const Padding(padding: EdgeInsets.all(4.0), child: SearchPage())),
    ));
  }
}
