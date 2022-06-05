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
  //for author name filter
  const [journalAuthorList, setJournalAuthorList] = useState([]);
  const getJournalAuthor = () => {
    Axios.get("http://localhost:3001/ShowJournalAuthors").then((response) => {
      console.log(response);
      setJournalAuthorList(response.data);
    });
  };
  getJournalAuthor();
  const [journalCategoryList, setJournalCategoryList] = useState([]);
  const getJournalCategory = () => {
    Axios.get("http://localhost:3001/ShowJournalCategory").then((response) => {
      console.log(response);
      setJournalCategoryList(response.data);
    });
  };
  getJournalCategory();
  const [journalYearList, setJournalYearList] = useState([]);
  const getJournalYear = () => {
    Axios.get("http://localhost:3001/ShowJournalYear").then((response) => {
      console.log(response);
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

          <div
            className="topnav"
            style={{ paddingLeft: "40px", top: "270px", color: "black" }}
          >
            <a style={{ color: "black", textDecoration: "none" }} href="./">
              Dashboard
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="/Login">
              Login
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
              Journal
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Conference"
            >
              Conference
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Article"
            >
              Article
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
                  />
                </div>
              </form>
              <div class="dropdown1">
                <select name="Author" id="Author">
                  <option value="All" selected>Author </option>
                  {journalAuthorList.map((val, key) => {
                    return <option value={val.author}> {val.author} </option>;
                  })}
                </select>
              </div>
              <div class="dropdown2">
                <select name="category" id="category">
                  <option value="All" selected>Category</option>
                  {journalCategoryList.map((val, key) => {
                    return (
                      <option value={val.category}> {val.category} </option>
                    );
                  })}
                </select>
              </div>
              <div class="dropdown3">
                <select name="year" id="year">
                  <option value="All" selected>Year</option>
                  {journalYearList.map((val, key) => {
                    return <option value={val.year}> {val.year} </option>;
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
                  {journalList.map((val, key) => {
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

export default Journal;
