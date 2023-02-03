const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connetToDB = () => {
    mongoose
  .connect(process.env.NO_NATURA, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🚀 MongoDB Atlas CONECTADO!!!"))
  .catch((err) => console.log(err));
}
module.exports = connetToDB;