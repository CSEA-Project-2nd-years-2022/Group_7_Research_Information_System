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
  database: "research_info_sys",
});

app.post("/AddArticle", (req, res) => {
  console.log(req.body);
  const author = req.body.author;
  const title = req.body.title;
  const publisher = req.body.publisher;
  const volume = req.body.volume;
  const year = req.body.year;

  db.query(
    "INSERT INTO article_table(author,title,publisher,volume,year) VALUES (?,?,?,?,?)",
    [author, title, publisher, volume, year],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddJournal", (req, res) => {
  console.log(req.body);
  const author = req.body.author;
  const title = req.body.title;
  const category = req.body.category;
  const journalName = req.body.journalName;
  const year = req.body.year;

  db.query(
    "INSERT INTO journal_table(author,title,category,journal_name,year) VALUES (?,?,?,?,?)",
    [author, title, category, journalName, year],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddConference", (req, res) => {
  console.log(req.body);
  const faculty = req.body.faculty;
  const title = req.body.title;
  const from1 = req.body.from;
  const to1 = req.body.to;
  const sponsoringAgency = req.body.sponsoringAgency;

  db.query(
    "INSERT INTO conference_table(faculty,title,fromdate,toDate,sponsoring_agency) VALUES(?,?,?,?,?)",
    [faculty, title, from1, to1, sponsoringAgency],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/ShowArticles", (req, res) => {
  db.query("SELECT * FROM article_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ShowConference", (req, res) => {
  db.query("SELECT * FROM conference_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ShowJournals", (req, res) => {
  db.query("SELECT * FROM journal_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ShowJournalAuthors", (req, res) => {
  db.query("SELECT DISTINCT author FROM journal_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ShowJournalCategory", (req, res) => {
  db.query("SELECT DISTINCT category FROM journal_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ShowJournalYear", (req, res) => {
  db.query("SELECT DISTINCT year FROM journal_table", (err, result) => {
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
