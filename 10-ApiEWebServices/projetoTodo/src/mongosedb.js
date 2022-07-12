const mongoose = require("mongoose");



module.exports = {
    init: () => {
        mongoose.connect(
          `mongodb+srv://admin:toor1234@cluster0.kzbqy.mongodb.net/nodeTodo?retryWrites=true&w=majority`,
                )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
};







/* module.exports = {
    init: () => {
        mongo.connect(`mongodb+srv://${user}:${pass}@cluster0.7u6nt.mongodb.net/${database}?retryWrites=true&w=majority´,
        {
            useNewUrlParser: true,
            useUnitfiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
        ).then((res) => console.log("Connectou com sucesso"))
        .catch((err) => console.log("error db connecter"));
    },
} */