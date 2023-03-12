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

function Journal() {
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
      <div
          style={{
            margin: "0px",
            width: "200px",
            height: "1800px",
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

          <div
            className="topnav"
            style={{ paddingLeft: "40px", top: "270px", color: "black" }}
          >
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/"
            >
              Profile
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/"
            >
              Dashboard
            </a>
            <br />
            <br />
            <br />
           
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Patents"
            >
              Patent
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Citations"
            >
              Citations
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/ResearchPublicationCount"
            >
              Research Publication Count
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/TechnologyTransfer"
            >
            Technology Transfer
            </a>
            <br />
            <br />
            <br />
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              href="/Journal"
            >
              International Journal
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/SponsoredResearchProjects"
            >
              Sponsored Research Projects
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Books"
            >
             Books
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Consultancy"
            >
              Consultancy
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/BookChapter"
            >
             Book Chapter
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/MoUsSigned"
            >
              MoUs Signed
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Conference"
            >
              International Conference
            </a>
            <br />
            <br />
            <br />
            
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Consolidated"
            >
             Consolidated
            </a>
            <br />
            <br />
            <br />
           
            <a style={{ color: "black", textDecoration: "none" }} href="./">
            Login
            </a>
            <br />
            <br />
            <br />
          </div>
        </div>
      <div className="columnLeft">
        
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
              
              <div
                style={{
                  marginTop: "100px",
                  marginLeft: "0px",
                  marginRight: "250px",
                }}
              >
                <table style={tableElements}>
                  <tr>
                    <th style={tableElements}>Emp Id</th>
                    <th style={tableElements}>Emp Name</th>
                    <th style={tableElements}>Title of Paper</th>
                    <th style={tableElements}>Author Names</th>
                    <th style={tableElements}>Journal Name</th>
                    <th style={tableElements}>ISSN no</th>
                    <th style={tableElements}>Date of Publication</th>
                    <th style={tableElements}>page no</th>
                    <th style={tableElements}>volume no</th>
                    <th style={tableElements}>Issue No</th>
                    <th style={tableElements}>Category</th>
                    <th style={tableElements}>Scopus SNIP No.</th>
                    <th style={tableElements}>UGC No.</th>
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
                        val.emp_name
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
                      else{}
                    })
                    .map((val) => {
                      return (
                        <tr>
                          <td style={tableElements}>{val.emp_id}</td>
                          <td style={tableElements}>{val.emp_name}</td>
                          <td style={tableElements}>{val.title_of_paper}</td>
                          <td style={tableElements}>{val.author_names}</td>
                          <td style={tableElements}>{val.journal_name}</td>
                          <td style={tableElements}>{val.issn_no}</td>
                          <td style={tableElements}>{val.dop}</td>
                          <td style={tableElements}>{val.page_no}</td>
                          <td style={tableElements}>{val.volume_no}</td>
                          <td style={tableElements}>{val.int_issue_num}</td>
                          <td style={tableElements}>{val.category}</td>
                          <td style={tableElements}>{val.scopus_snip_number}</td>
                          <td style={tableElements}>{val.ugc_list_number}</td>
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

export default Journal;
