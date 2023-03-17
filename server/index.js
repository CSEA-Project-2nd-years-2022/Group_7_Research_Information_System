const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "admin",
  host: "psg-ris.c8qjejxbwt2k.us-east-1.rds.amazonaws.com",
  password: "KiReSh2002",
  database: "Research_info_system",
});

app.post("/AddArticle", (req, res) => {
  console.log(req.body);
  const author = req.body.author;
  const title = req.body.title;
  const publisher = req.body.publisher;c
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

// Journal Filters
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
// Conference Filters

//Article Filters
app.get("/ShowArticleAuthors", (req, res) => {
  db.query("SELECT DISTINCT author FROM article_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ShowArticlePublishers", (req, res) => {
  db.query("SELECT DISTINCT publisher FROM article_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ShowArticleYear", (req, res) => {
  db.query("SELECT DISTINCT year FROM article_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Conference Filters
app.get("/ShowConferenceFaculty", (req, res) => {
  db.query("SELECT DISTINCT faculty FROM conference_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ShowConferenceSponsoringAgency", (req, res) => {
  db.query(
    "SELECT DISTINCT sponsoring_agency FROM conference_table",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Login Page
app.get("/ShowLoginDetails", (req, res) => {
  db.query("SELECT * FROM login_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/AddLogin", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const is_login = req.body.is_login;

  db.query(
    "INSERT INTO login_table(email,password,is_login) VALUES(?,?,?)",
    [email, password, is_login],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/ShowEmails", (req, res) => {
  db.query("SELECT email FROM login_table", (err, result) => {
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/ShowBooks", (req, res) => {
  db.query("SELECT * FROM books NATURAL JOIN employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ShowPatents", (req, res) => {
  db.query("SELECT * FROM patent NATURAL JOIN employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ShowCitations", (req, res) => {
  db.query("SELECT * FROM citations NATURAL JOIN employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ShowResearchPubCount", (req, res) => {
  db.query(
    "SELECT * FROM research_count NATURAL JOIN employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/ShowTechnologyTransfer", (req, res) => {
  db.query(
    "SELECT * FROM technology_transfer NATURAL JOIN employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/ShowJournals", (req, res) => {
  db.query(
    "SELECT * FROM international_journal NATURAL JOIN employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/ShowResearchProjects", (req, res) => {
  db.query(
    "SELECT * FROM sponsored_research_projects NATURAL JOIN employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/ShowConsultancy", (req, res) => {
  db.query(
    "SELECT * FROM consultancy NATURAL JOIN employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/ShowBookChapter", (req, res) => {
  db.query(
    "SELECT * FROM book_chapter NATURAL JOIN employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/ShowMou", (req, res) => {
  db.query("SELECT * FROM mou NATURAL JOIN employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/ShowConference", (req, res) => {
  db.query(
    "SELECT * FROM international_conference NATURAL JOIN employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


app.post("/AddCitation", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const num_citations = req.body.num_citations;

  db.query(
    "INSERT INTO citations(emp_id,num_citations) VALUES (?,?)",
    [emp_id, num_citations],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddPublicationCount", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const num_int_jn = req.body.num_int_jn;
  const num_nat_jn = req.body.num_nat_jn;
  const num_int_con = req.body.num_int_con;
  const num_nat_con = req.body.num_nat_con;
  const num_book = req.body.num_book;
  const num_chap = req.body.num_chap;


  db.query(
    "INSERT INTO Research_Publication_Count(emp_id, num_int_jn,num_nat_jn,num_int_con,num_nat_con,num_book,num_chap) VALUES (?,?,?,?,?,?,?)",
    [emp_id, num_int_jn,num_nat_jn,num_int_con,num_nat_con,num_book,num_chap],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddEmployee", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const emp_name = req.body.emp_name;


  db.query(
    "INSERT INTO employees(emp_id, emp_name) VALUES (?,?)",
    [emp_id, emp_name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddTechTransfer", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const emp_name = req.body.emp_name;


  db.query(
    "INSERT INTO technology_transfer(emp_id , num_tech_tran , title_tech_tran , industry_alliance , num_people_involved) VALUES (?,?,?,?,?)",
    [emp_id , num_tech_tran , title_tech_tran , industry_alliance , num_people_involved],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});