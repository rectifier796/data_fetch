const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const dataModel = require("./dataModel");
const cors=require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

let data = [];

db_link = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.iwskivs.mongodb.net/?retryWrites=true&w=majority`;
console.log(process.env.USER);
mongoose
  .connect(db_link)
  .then(function (db) {
    console.log("Database Connected");
  })
  .catch(function (err) {
    console.log(err);
  });


//Fetching data and storing top 10 data to mongodb
// axios
//   .get("https://api.wazirx.com/api/v2/tickers?type")
//   .then((response) => {
//     var temp = Object.values(response.data);
//     // console.log(temp);
//     for (var i = 0; i < 10; i++) {
//       data.push(temp[i]);
//     }
//     //console.log(data);
//     data.map(async(err) => {
//       const eachData = {
//         name: err.name,
//         last: err.last,
//         buy: err.buy,
//         sell: err.buy,
//         volume: err.volume,
//         base_unit: err.base_unit,
//       };
//       await dataModel.create(eachData);
//     });
//   })
//   .catch((err) => {
//     console.log("Error Occured : " + err.message);
//   });

app.get("/getData",async(req,res)=>{
    let allData=await dataModel.find();
    console.log("Data Sent");
    res.json(allData);
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
