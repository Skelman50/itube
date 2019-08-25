import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/we-tube", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to db");
const handleError = err => console.log(`Error connectto db ${err}`);

db.once("open", handleOpen);
db.on("error", handleError);
