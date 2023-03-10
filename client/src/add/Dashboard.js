import "./styles.css";
import { useState } from "react";
import Axios from "axios";

const tableElements = {
  border: "1px solid black",
  borderCollapse: "collapse",
  columnWidth: "500px",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingLeft: "5px",
  paddingRight: "5px",
};

function Dashboard() {
  const [journalList, setJournalList] = useState([]);
  const getJournals = () => {
    Axios.get("http://localhost:3001/ShowJournals").then((response) => {
      console.log(response);
      setJournalList(response.data);
    });
  };
  getJournals();
  const [conferenceList, setConferenceList] = useState([]);
  const getConference = () => {
    Axios.get("http://localhost:3001/ShowConference").then((response) => {
      console.log(response);
      setConferenceList(response.data);
    });
  };
  getConference();
  const [articleList, setarticleList] = useState([]);
  const getArticles = () => {
    Axios.get("http://localhost:3001/ShowArticles").then((response) => {
      console.log(response);
      setarticleList(response.data);
    });
  };
  getArticles();

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
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              href="/"
            >
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
              style={{ color: "black", textDecoration: "none" }}
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
              Article----
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
              href="/Patents"
            >
              Patents
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
              <h2 style={{ opacity: "100%", fontSize: "30px" }}>Welcome....</h2>
              <h2 style={{ opacity: "100%", fontSize: "30px" }}>
                RECENT PUBLICATIONS(Journals)
              </h2>
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
            <div>
              <div
                style={{
                  top: "200px",
                  position: "absolute",
                  right: "60px",
                }}
              >
                <div
                  style={{
                    borderRadius: "10px",
                    height: "80px",
                    width: "90px",
                    margin: "30px",
                    padding: "10px 10px 10px 30px",
                    border: "solid black",
                    backgroundColor: "#FFFACD",
                    fontFamily: "Google Sans",
                  }}
                >
                  <h1
                    style={{
                      marginTop: "5px",
                      fontSize: "40px",
                      marginBottom: "2px",
                      marginLeft: "20px",
                    }}
                  >
                    {journalList.length}
                  </h1>
                  <h3 style={{ marginTop: "0px", fontWeight: "bold" }}>
                    Journals
                  </h3>
                </div>
                <div
                  style={{
                    borderRadius: "10px",
                    height: "80px",
                    width: "90px",
                    margin: "30px",
                    padding: "10px 10px 10px 30px",
                    border: "solid black",
                    backgroundColor: "#FFE4B5",
                  }}
                >
                  <h1
                    style={{
                      marginTop: "5px",
                      fontSize: "40px",
                      marginBottom: "2px",
                      marginLeft: "25px",
                    }}
                  >
                    {conferenceList.length}
                  </h1>
                  <h3 style={{ marginTop: "0px", fontWeight: "bold" }}>
                    Conference
                  </h3>
                </div>
                <div
                  style={{
                    borderRadius: "10px",
                    height: "80px",
                    width: "90px",
                    margin: "30px",
                    padding: "10px 10px 10px 30px",
                    border: "solid black",
                    backgroundColor: "#FFC0CB",
                  }}
                >
                  <h1
                    style={{
                      marginTop: "5px",
                      fontSize: "40px",
                      marginBottom: "2px",
                      marginLeft: "25px",
                    }}
                  >
                    {articleList.length}
                  </h1>
                  <h3 style={{ marginTop: "0px", fontWeight: "bold",marginLeft:"10px" }}>
                    Articles
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
