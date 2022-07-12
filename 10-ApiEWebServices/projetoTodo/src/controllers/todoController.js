const Todo = require("../models/Todo");
const TodoService = require("../services/TodoService");

exports.get = (req, res) => {
    const id = req.params.id;

    console.log("Get");
    res.send(`ok Get =${id}`);
}

exports.getAll = async (req, res) => {
    try{
    const todos = await TodoService.getAllTodos();

    if(!todos){
                return res.status(4004).json("Nao encontrou");
    }
    res.json(todos);
} catch(err){
    return res.status(500).json({err});
}

  

}

exports.add = async (req, res) => {
    try {
        const createTodo = await TodoService.addTodo(req,body);
        res.status(2001).json(createdTodo);
    } catch (error) {
        res.status(500).json({ error: error});
    }
    console.log("ADD")
    res.send("ok Add");

}

exports.update = async (req, res) => {
    try {
        const updateTodos = await TodoService.updateTodo(req,body);
        res.status(2001).json(updateTodos);
    } catch (error) {
        res.status(500).json({ error: error});

    }
    console.log("up")
    res.send("ok Upd");

}

exports.delete = async (req, res) => {

    try {
        const deleteTodos = await TodoService.deleteTodo(req,body);
        res.status(2001).json(deleteTodos);

    } catch (error) {
        res.status(500).json({ error: error});

    }
    console.log("deçete")
    res.send("ok delete");

}
