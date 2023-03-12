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
            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

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
              <div class="row">
                <div className="column">
                  <h2 className="box" style={{ backgroundColor: "#F6F3B5" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/"
                    >
                      Profile
                    </a>
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#F6F3B5" }}>
                    {" "}
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
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#F6F3B5" }}>
                    {" "}
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/Patents"
                    >
                      Patent
                    </a>
                  </h2>
                </div>
                <div className="column">
                  <h2 className="box" style={{ backgroundColor: "#FFDCBE" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/Citations"
                    >
                      Citations
                    </a>
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#FFDCBE" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/TechnologyTransfer"
                    >
                      Technology Transfer
                    </a>
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#FFDCBE" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/TechnologyTransfer"
                    >
                      Research Publication Count
                    </a>
                  </h2>
                </div>
                <div className="column">
                  <h2 className="box" style={{ backgroundColor: "#FDB9C9" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/Journal"
                    >
                      Journal
                    </a>
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#FDB9C9" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/SponsoredResearchProjects"
                    >
                      Sponsored Research Projects
                    </a>
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#FDB9C9" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/Books"
                    >
                      Books
                    </a>
                  </h2>
                </div>
                <div className="column">
                  <h2 className="box" style={{ backgroundColor: "#BBF6F3" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/Consultancy"
                    >
                      Consultancy
                    </a>
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#BBF6F3" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/BookChapter"
                    >
                      Book Chapter
                    </a>
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#BBF6F3" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/MoUsSigned"
                    >
                      MoUs Signed
                    </a>
                  </h2>
                </div>
                <div className="column">
                  <h2 className="box" style={{ backgroundColor: "#A7E0F4" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/Conference"
                    >
                      Conference
                    </a>
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#A7E0F4" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="/Consolidated"
                    >
                      Consolidated
                    </a>
                  </h2>
                  <h2 className="box" style={{ backgroundColor: "#A7E0F4" }}>
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="./"
                    >
                      Login
                    </a>
                  </h2>
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
