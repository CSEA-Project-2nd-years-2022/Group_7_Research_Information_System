const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "4321",
  database: "dbms_proj",
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const author = req.body.author;
  const title = req.body.title;
  const category = req.body.category;
  const articleName = req.body.articleName;
  const year = req.body.year;

  db.query(
    "INSERT INTO journal_table(author,title,category,article_name,year) VALUES (?,?,?,?,?)",
    [author, title, category, articleName, year],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/journals", (req, res) => {
  db.query("SELECT * FROM journal_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("yes server running");
});

