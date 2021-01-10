const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const Search = require("./Models/Searchmodel");

const app = express();
env.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster.9iwi5.mongodb.net/uisearch?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => {
    console.log("Database Connected!");
  });

const PORT = process.env.PORT;

// SAVED JSON IN DATABASE

// SearchData.data.map((result) => {
//   const { Title, Unit, Frequency, Source, Description } = result;
//   console.log(Title, Unit, Frequency, Source, Description);
//   const _Search = new Search({
//     title: Title,
//     unit: Unit,
//     frequency: Frequency,
//     source: Source,
//     description: Description
//   });
//   _Search.save((error, data) => {
//     if (error) {
//       console.group(error);
//     } else {
//       console.log("saved!");
//     }
//   });
// });

app.get("/", (req, res) => {
  Search.find({}).exec((error, data) => {
    if (error) {
      res.status(400).json({
        msg: error
      });
    } else {
      res.status(200).json({
        data
      });
    }
  });
});

app.listen(PORT, console.log(`server is listening to port :${PORT}`));
