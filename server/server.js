const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Client3 = require("nedb");
app.use(cors());
const { Client } = require("pg");
app.use(express.urlencoded({ extended: false }));
const bodyParser = require("body-parser");
const datas = require("./exampleresponse.json");

const port = process.env.PORT || 4000;

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "coder123",
  database: "videos",
  port: 5432,
});
client.connect(function (error) {
  if (error) throw error;
  console.log("connected");
});

let client2 = new Client3("Database.db");

app.get("/thevideos", (req, res) => {
  client
    .query("SELECT * FROM thevideos")
    .then((result) => res.send(result.rows));
});
app.post("/thevideos", (req, res) => {
  let titleOne = req.body.title;
  let ratingOne = req.body.rating;
  let urlOne = req.body.url;
  let query = `insert into thevideos(title, rating, url) values ($1, $2, $3)`;
  client
    .query(query, [titleOne, ratingOne, urlOne])
    .then((result) => res.send(result.rows));
  try {
    if (typeof ratingOne !== "") {
      console.log(`${titleOne} - ${urlOne} - ${ratingOne} `);

      client2.loadDatabase();
      client2.insert({
        title: titleOne,
        rating: ratingOne,
        url: urlOne,
      });
    }
  } catch {
    console.error(error);
  }
});

// update the record in table thevideos
app.put("/thevideos/:id", (req, res) => {
  let id = req.params.id;
  let title = req.body.title;
  let rating = req.body.rating;
  const query = `UPDATE thevideos SET title = $1, rating = $2 WHERE id = $3`;
  const result = client.query(query, [title, rating, id], (error, result) => {
    if (error) res.send(error);
    else {
      res.send(result.rows);
    }
  });
  return result;
});
//get video by id
app.get("/thevideos/:id", (req, res) => {
  let myId = req.params.id;
  let query = `SELECT * FROM thevideos WHERE id = $1`;
  client.query(query, [myId], (error, result) => {
    if (error) res.send(error);
    else {
      res.send(result.rows[0]);
      console.log(req.params.id);
    }
  });
});

//delete data specific id
app.delete("/thevideos/:id", (req, res) => {
  const id = req.params.id;
  let query = `DELETE FROM thevideos WHERE id = $1`;
  client.query(query, [id], (error, result) => {
    if (error) res.send(error);
    else {
      res.send(`deleted `);
    }
  });
});
app.listen(port, function () {
  console.log(`the listener will be listen to the port    in ${port},`);
});
