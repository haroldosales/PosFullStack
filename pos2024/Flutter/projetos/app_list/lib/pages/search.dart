import 'package:app_list/domain/todo_service.dart';
import 'package:app_list/model/todo.dart';
import 'package:flutter/material.dart';

class SearchPage extends StatefulWidget {
  const SearchPage({super.key});

  @override
  State<StatefulWidget> createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  late Future<List<TodoItem>> filteredResult;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    filteredResult = fetchItems();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          decoration: const InputDecoration(
              labelText: "Buscar por...",
              border: OutlineInputBorder(),
              icon: Icon(Icons.search)),
          onChanged: (value) {
            setState(() {
              filteredResult = searchItems(value);
            });
          },
        ),
        FutureBuilder(
            future: filteredResult,
            builder: (ontext, snapshot) {
              if (snapshot.hasData) {
                return Expanded(
                    child: ListView.builder(
                  itemCount: snapshot.data?.length ?? 0,
                  itemBuilder: (context, index) =>
                      Text(snapshot.data?.elementAt(index).title ?? ''),
                ));
              } else if (snapshot.hasError) {
                return Text("Nao foi possivel carregar os dados");
              }
              return CircularProgressIndicator();
            })
      ],
    );
  }
}
