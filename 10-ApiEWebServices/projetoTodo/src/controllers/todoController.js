
exports.get = (req, res) => {
    const id = req.params.id;

    console.log("Get");
    res.send(`ok Get =${id}`);
}

exports.getAll = (req, res) => {
    console.log("get Todo")
    res.send("ok  get all");

}

exports.add = (req, res) => {
    console.log("ADD")
    res.send("ok Add");

}

exports.update = (req, res) => {
    console.log("up")
    res.send("ok Upd");

}

exports.delete = (req, res) => {
    console.log("deçete")
    res.send("ok delete");

}
