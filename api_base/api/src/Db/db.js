const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/Adoptame";
//const URL = "mongodb+srv://<nombre usuario>:password@cluster0.bsvp1kl.mongodb.net/Adoptame?retryWrites=true&w=majority";
// "mongodb+srv://arieltecnico:1NOcCreyIcc5UnvH@cluster0.bsvp1kl.mongodb.net/Adoptame";

const cnn = async () => {
  await mongoose.connect(URL, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = cnn;
