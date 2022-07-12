const mongoose = require("mongoose");



module.exports = {
    init: () => {
        mongoose.connect(
          `mongodb+srv://XXX:XXX@clxr0.xxx.mongodb.net/nodeTodo?retryWrites=true&w=majority`,
                )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    },
};




