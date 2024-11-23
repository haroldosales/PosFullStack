import 'package:flutter/material.dart';

const possibleResult = ['puc', 'test', 'flutter', 'studos'];

class SearchPage extends StatefulWidget {
  const SearchPage({super.key});

  @override
  State<StatefulWidget> createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  List<String>? filteredResult = possibleResult;

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
              filteredResult = possibleResult
                  .where((option) => option.contains(value))
                  .toList();
            });
          },
        ),
        Expanded(
            child: ListView.builder(
          itemCount: filteredResult?.length ?? 0,
          itemBuilder: (context, index) =>
              Text(filteredResult?.elementAt(index) ?? ''),
        ))
      ],
    );
  }
}
 