import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddConference() {
  const [faculty, setFaculty] = useState("");
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sponsoringAgency, setSponsoringAgency] = useState("");

  const [articleList, setarticleList] = useState([]);

  const displayInfo = () => {
    console.log(faculty + title + from + to + sponsoringAgency);
  };

  const addJournal = () => {
    Axios.post("http://localhost:3001/AddConference", {
      faculty: faculty,
      title: title,
      from: from,
      to: to,
      sponsoringAgency: sponsoringAgency,
    }).then(() => {
      console.log("success");
      setarticleList([
        ...articleList,
        {
          faculty: faculty,
          title: title,
          from: from,
          to: to,
          sponsoringAgency: sponsoringAgency,
        },
      ]);
    });
  };

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
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AdminDashboard"
            >
              Profile
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AdminDashboard"
            >
              Dashboard
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AdminJournal"
            >
              Journal
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AdminConference"
            >
              Conference
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AdminArticle"
            >
              Article
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
              href="/Login/AddResearchPapers"
            >
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
                paddingLeft: "60px",
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
              <h2 style={{ opacity: "100%", fontSize: "30px" }}>
                ADD CONFERENCE DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>Faculty: </label>
                      <input
                        style={{ marginLeft: "87px", width: "400px" }}
                        type="text"
                        onChange={(event) => {
                          setFaculty(event.target.value);
                        }}
                        placeholder="Faculty Name"
                      />
                      <div>
                        Title:{""}
                        <input
                          style={{ marginLeft: "107px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setTitle(event.target.value);
                          }}
                          placeholder="Title"
                        />
                      </div>
                      <div>
                        From:{""}
                        <input
                          style={{ marginLeft: "102px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setFrom(event.target.value);
                          }}
                          placeholder="From"
                        />
                        &nbsp;
                      </div>
                      <div>
                        To:{""}
                        <input
                          type="text"
                          style={{ marginLeft: "121px", width: "400px" }}
                          onChange={(event) => {
                            setTo(event.target.value);
                          }}
                          placeholder="To"
                        />
                        &nbsp;
                      </div>
                      <div>
                        Sponsoring Agency :{""}
                        <input
                          type="text"
                          style={{ marginLeft: "7px", width: "400px" }}
                          onChange={(event) => {
                            setSponsoringAgency(event.target.value);
                          }}
                          placeholder="Sponsoring Agency"
                        />
                        &nbsp;
                      </div>
                      <br />
                      <br />
                    </div>
                    <button
                      className="add-submit"
                      style={{ marginLeft: "170px" }}
                      type="submit"
                      onClick={addJournal}
                    >
                      Submit
                    </button>
                    &nbsp;
                    <button className="b1" type="submit">
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddConference;
