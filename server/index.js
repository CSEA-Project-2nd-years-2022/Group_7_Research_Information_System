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
    [
      emp_id,
      num_int_jn,
      num_nat_jn,
      num_int_con,
      num_nat_con,
      num_book,
      num_chap,
    ],
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
  const num_tech_tran = req.body.num_tech_tran;
  const title_tech_tran = req.body.title_tech_tran;
  const industry_alliance = req.body.industry_alliance;
  const num_people_inloved = req.body.num_people_inloved;

  db.query(
    "INSERT INTO technology_transfer(emp_id , num_tech_tran , title_tech_tran , industry_alliance , num_people_inloved) VALUES (?,?,?,?,?)",
    [
      emp_id,
      num_tech_tran,
      title_tech_tran,
      industry_alliance,
      num_people_inloved,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddInternationalJournal", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const title_of_paper = req.body.title_of_paper;
  const author_names = req.body.author_name;
  const journal_name = req.body.journal_name;
  const issn_no = req.body.issn_no;
  const dop = req.body.dop;
  const page_no = req.body.page_no;
  const volume_no = req.body.volume_no;
  const int_issue_num = req.body.int_issue_num;
  const category = req.body.category;
  const scopus_snip_number = req.body.scopus_snip_number;
  const ugc_list_number = req.body.ugc_list_number;

  db.query(
    "INSERT INTO international_journal(emp_id	, title_of_paper	,author_names ,	journal_name ,	issn_no	, dop,	page_no	,volume_no	,int_issue_num	,category	,scopus_snip_number,	ugc_list_number) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      emp_id,
      title_of_paper,
      author_names,
      journal_name,
      issn_no,
      dop,
      page_no,
      volume_no,
      int_issue_num,
      category,
      scopus_snip_number,
      ugc_list_number,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddSponsoredResearchProjects", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const project_name = req.body.project_name;
  const funding_agency = req.body.funding_agency;
  const total_grant_sanctioned = req.body.total_grant_sanctioned;
  const principal_investigator = req.body.principal_investigator;
  const coprincipal_investigator = req.body.coprincipal_investigator;
  const duration = req.body.duration;
  const grant_released = req.body.grant_released;
  const status = req.body.status;

  db.query(
    "INSERT INTO sponsored_research_projects(emp_id	, project_name , funding_agency ,total_grant_sanctioned,	principal_investigator	, coprincipal_investigator, duration,grant_released	,status) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      emp_id,
      project_name,
      funding_agency,
      total_grant_sanctioned,
      principal_investigator,
      coprincipal_investigator,
      duration,
      grant_released,
      status,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddBooks", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const title_of_book = req.body.title_of_book;
  const isbn_number = req.body.isbn_number;
  const co_author = req.body.co_author;
  const yop = req.body.yop;
  const name_of_publisher = req.body.name_of_publisher;

  db.query(
    "INSERT INTO books(emp_id	 ,title_of_book	, isbn_number ,	co_auhtor ,	yop ,	name_of_publisher) VALUES (?,?,?,?,?,?)",
    [emp_id, title_of_book, isbn_number, co_author, yop, name_of_publisher],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddConsultancy", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const name_consultant_departement = req.body.name_consultant_departement;
  const name_consultancy = req.body.name_consultancy;
  const consulting_agency = req.body.consulting_agency;
  const revenue_generated = req.body.revenue_generated;
  const grant_released = req.body.grant_released;
  const status = req.body.status;

  db.query(
    "INSERT INTO consultancy(emp_id , name_consultant_department ,name_consultancy , consulting_agency , revenue_generated , grant_released , status) VALUES (?,?,?,?,?,?,?)",
    [
      emp_id,
      name_consultant_departement,
      name_consultancy,
      consulting_agency,
      revenue_generated,
      grant_released,
      status,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddBookChapter", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const title_book_chapter = req.body.title_book_chapter;
  const title_book = req.body.title_book;
  const isbn_number = req.body.isbn_number;
  const co_author = req.body.co_auhtor;
  const yop = req.body.yop;
  const publisher_name = req.body.publisher_name;

  db.query(
    "INSERT INTO book_chapter(emp_id , title_book_chapter ,title_book, isbn_number , co_author,yop ,publisher_name) VALUES (?,?,?,?,?,?,?)",
    [
      emp_id,
      title_book_chapter,
      title_book,
      isbn_number,
      co_author,
      yop,
      publisher_name,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddMou", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const organization_name = req.body.organization_name;
  const date_mou_signed = req.body.date_mou_signed;
  const purpose_activities = req.body.purpose_activities;
  const num_participants = req.body.num_participants;
  const title_mou = req.body.title_mou;

  db.query(
    "INSERT INTO book_chapter(emp_id , organization_name , date_mou_signed, purpose_activities ,  num_participants , title_mou ) VALUES (?,?,?,?,?,?)",
    [
      emp_id,
      organization_name,
      date_mou_signed,
      purpose_activities,
      num_participants,
      title_mou,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddInternationalConference", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const paper_title = req.body.paper_title;
  const coauthour_name = req.body.coauthour_name;
  const conference_title = req.body.conference_title;
  const organizing_institution = req.body.organizing_institution;
  const date = req.body.date;
  const paper_scopus = req.body.paper_scopus;
  const no_pages = req.body.no_pages;
  const proceedings_title = req.body.proceedings_title;
  const total_num_published = req.body.total_num_published;
  const category = req.body.category;

  db.query(
    "INSERT INTO international_conference(emp_id ,	paper_title	, coauthour_name	, conference_title ,	organizing_institution	, date ,	paper_scopus ,	no_pages ,	proceedings_title	, total_num_published	 ,category) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [
      emp_id,
      paper_title,
      coauthour_name,
      conference_title,
      organizing_institution,
      date,
      paper_scopus,
      no_pages,
      proceedings_title,
      total_num_published,
      category,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/AddPatent", (req, res) => {
  console.log(req.body);
  const emp_id = req.body.emp_id;
  const num_patent = req.body.num_patent;
  const num_patent_granted = req.body.num_patent_granted;
  const num_patent_liscenced = req.body.num_patent_liscenced;
  const patent_number = req.body.patent_number;
  const date_award = req.body.date_award;
  const patent_title = req.body.patent_title;

  db.query(
    "INSERT INTO patent(emp_id	, num_patent	 , num_patent_granted ,	num_patent_liscenced	 , patent_number ,	date_award ,	patent_title) VALUES (?,?,?,?,?,?,?)",
    [
      emp_id,
      num_patent,
      num_patent_granted,
      num_patent_liscenced,
      patent_number,
      date_award,
      patent_title,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

///////////////////////////////////////////////////////////
// Filter query
app.get("/ShowPatentNos", (req, res) => {
  db.query("SELECT DISTINCT patent_number FROM patent", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/ShowIndustryAlliance", (req, res) => {
  db.query(
    "SELECT DISTINCT industry_alliance FROM technology_transfer",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.get("/ShowJournalAuthor", (req, res) => {
  db.query(
    "SELECT DISTINCT emp_name FROM international_journal NATURAL JOIN employees",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/ShowJournalCategory", (req, res) => {
  db.query(
    "SELECT DISTINCT category FROM international_journal",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/ShowEmpId", (req, res) => {
  db.query(
    "SELECT DISTINCT emp_id FROM employees ORDER BY emp_id",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
