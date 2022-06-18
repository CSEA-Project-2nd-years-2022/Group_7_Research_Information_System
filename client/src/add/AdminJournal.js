import "./styles.css";
import { useState } from "react";
import Axios from "axios";

const tableElements = {
  border: "1px solid black",
  borderCollapse: "collapse",
  columnHeight: "300px",
  paddingTop: "10px",
  paddingBottom: "5px",
  paddingLeft: "10px",
  paddingRight: "10px",
};

function AdminJournal() {
  const [journalList, setJournalList] = useState([]);
  const getJournals = () => {
    Axios.get("http://localhost:3001/ShowJournals").then((response) => {
      console.log(response);
      setJournalList(response.data);
    });
  };
  getJournals();
  //Search items
  const [searchItem, setSearchItem] = useState("");
  //Filters
  const [journalAuthorList, setJournalAuthorList] = useState([]);
  const [individualTempAuthorList, setIndividualTempAuthorList] = useState([]);
  const [authorFilterValue, setAuthorFilterValue] = useState("All");
  const getJournalAuthor = () => {
    Axios.get("http://localhost:3001/ShowJournalAuthors").then((response) => {
      // console.log(response);
      setJournalAuthorList(response.data);
    });
    // console.log(journalAuthorList);
    journalAuthorList.map((val) => {
      if (val.author.includes(",")) {
        var tempList = val.author.split(",");
        tempList.map((value) => {
          if (individualTempAuthorList.includes(value.trim()) === false) {
            individualTempAuthorList.push(value.trim());
          }
        });
      } else {
        if (individualTempAuthorList.includes(val.author) === false) {
          individualTempAuthorList.push(val.author);
        }
      }
    });
    console.log(individualTempAuthorList);
  };
  getJournalAuthor();

  const [journalCategoryList, setJournalCategoryList] = useState([]);
  const [categoryFilterValue, setCategoryFilterValue] = useState("All");
  const getJournalCategory = () => {
    Axios.get("http://localhost:3001/ShowJournalCategory").then(
      (response) => {
        // console.log(response);
        setJournalCategoryList(response.data);
      }
    );
  };
  getJournalCategory();

  const [journalYearList, setJournalYearList] = useState([]);
  const [yearFilterValue, setYearFilterValue] = useState("All");
  const getJournalYear = () => {
    Axios.get("http://localhost:3001/ShowJournalYear").then((response) => {
      // console.log(response);
      setJournalYearList(response.data);
    });
  };
  getJournalYear();

  return (
    <div>
      <div className="columnLeft">
        <div
          style={{
            margin: "0px",
            width: "200px",
            height: "1200px",
            background: "#ADD8E6",
          }}
        >
          <div>
            <h1 style={{ fontSize: "150px", opacity: "15%", margin: "0px" }}>
              PSG
            </h1>
            <nbsp />
            <h2
              style={{
                margin: "10px",
                fontSize: "35px", 
                opacity: "15%",
              }}
            >
              College of Technology
            </h2>
            <br />

            <hr
              style={{
                width: "170px",
                textAlign: "center",
              }}
            />
          </div>
         
          <div className="topnav" style={{ paddingLeft: "40px", top: "270px", color: "black" }}>
            <a style={{ color: "black", textDecoration: "none" }} href="/Login/AdminDashboard">
              Profile
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="/Login/AdminDashboard">
              Dashboard
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none", fontSize: "20px",
  fontWeight: "bold",textDecoration: "underline" }} href="/Login/AdminJournal">
              Journal
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="/Login/AdminConference">
              Conference
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="/Login/AdminArticle">
              Article
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="/Login/AddResearchPapers">
              Add Research Papers
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="./">
              Logout
            </a>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="columnRight">
          <div>
            <div
              style={{
                position: "absolute",
                top: "50px",
                borderRadius: "18px 18px 18px 18px",
                left: "250px",
                backgroundImage:
                  "linear-gradient(to right,rgba(241, 240, 233, 3),rgba(255, 0, 0, 0));",
                color: "black",
                textOpacity: "100%",
                paddingLeft: "30px",
                paddingRight: "40px",
                opacity: "75%",
              }}
            >
              <h1
                style={{
                  marginTop: "2px",
                  textAlign: "center",
                  fontSize: "40px",
                  opacity: "100%",
                }}
              >
                RESEARCH INFORMATION SYSTEM
              </h1>
              <hr style={{ width: "750px", textAlign: "center" }} />
              <br />
              <br />
              <h2 style={{ opacity: "100%", fontSize: "30px" }}>JOURNALS</h2>
              <form>
                <div>
                  <input
                    style={{ width: "600px", borderRadius: "14px" }}
                    type="text"
                    placeholder="Type to search"
                    onChange={(event) => {
                      setSearchItem(event.target.value);
                    }}
                  />
                </div>
              </form>
              <div class="dropdown1">
              <label>Author : </label>
                <select
                  name="Author"
                  id="Author"
                  onChange={(event) => {
                    setAuthorFilterValue(event.target.value);
                  }}
                >
                  <option value="All" selected>
                    All
                  </option>
                  {individualTempAuthorList.map((val, key) => {
                    return <option value={val}>{val}</option>;
                  })}
                </select>
              </div>
              <div class="dropdown2">
                <label>Category : </label>
                <select name="category" id="category" 
                onChange={(event) => {
                    setCategoryFilterValue(event.target.value);
                  }}
                >
                  <option value="All" selected>
                    All
                  </option>
                  {journalCategoryList.map((val, key) => {
                    return (
                      <option value={val.category}>{val.category}</option>
                    );
                  })}
                </select>
              </div>
              <div class="dropdown3">
                <label>Year : </label>
                <select name="year" id="year" 
                onChange={(event) => {
                    setYearFilterValue(event.target.value);
                  }}
                  >
                  <option value="All" selected>
                    All
                  </option>
                  {journalYearList.map((val, key) => {
                    return <option value={val.year}>{val.year}</option>;
                  })}
                </select>
              </div>
              <div
                style={{
                  marginTop: "100px",
                  marginLeft: "0px",
                  marginRight: "250px",
                }}
              >
                <table style={tableElements}>
                  <tr>
                    <th style={tableElements}>Sno</th>
                    <th style={tableElements}>Author</th>
                    <th style={tableElements}>Title</th>
                    <th style={tableElements}>Category</th>
                    <th style={tableElements}>Journal Name</th>
                    <th style={tableElements}>Year</th>
                  </tr>
                  {journalList
                    .filter((val) => {
                      if (searchItem === "") {
                        if (
                          authorFilterValue === "All" &&
                          categoryFilterValue === "All" &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          categoryFilterValue === val.category &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          categoryFilterValue === val.category &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          categoryFilterValue === "All" &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          categoryFilterValue === val.category &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          categoryFilterValue === "All" &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          categoryFilterValue === val.category &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          categoryFilterValue === "All" &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        }
                      } else if (
                        val.author
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.title
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.category
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.journal_name
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                      ) {
                        if (
                          authorFilterValue === "All" &&
                          categoryFilterValue === "All" &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          categoryFilterValue === val.category &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          categoryFilterValue === val.category &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          categoryFilterValue === "All" &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          categoryFilterValue === val.category &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          categoryFilterValue === "All" &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          categoryFilterValue === val.category &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          categoryFilterValue === "All" &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        }
                      }
                    })
                    .map((val, key) => {
                      return (
                        <tr key={val.s_no}>
                          <td style={tableElements}>{val.s_no}</td>
                          <td style={tableElements}>{val.author}</td>
                          <td style={tableElements}>{val.title}</td>
                          <td style={tableElements}>{val.category}</td>
                          <td style={tableElements}>{val.journal_name}</td>
                          <td style={tableElements}>{val.year}</td>
                        </tr>
                      );
                    })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminJournal;
