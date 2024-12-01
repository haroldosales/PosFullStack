class TodoItem {
  int id;
  int userId;
  String title;
  bool completed;

  TodoItem(
      {required this.id,
      required this.userId,
      required this.title,
      required this.completed});

  factory TodoItem.fromJson(Map<String, dynamic> json) {
    return switch (json) {
      {
        'id': int id,
        'userId': int userId,
        'title': String title,
        'completed': bool completed
      } =>
        TodoItem(id: id, userId: userId, title: title, completed: completed),
      _ => throw const FormatException("Não foi possivel carregar o item")
    };
  }
}
