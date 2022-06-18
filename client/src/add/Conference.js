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

function Conference() {
  const [conferenceList, setConferenceList] = useState([]);
  const getConference = () => {
    Axios.get("http://localhost:3001/ShowConference").then((response) => {
      console.log(response);
      setConferenceList(response.data);
    });
  };
  getConference();
  //Search items
  const [searchItem, setSearchItem] = useState("");
  //Filters
  const [conferenceFacultyList, setConferenceFacultyList] = useState([]);
  const [individualTempFacultyList, setIndividualTempFacultyList] = useState(
    []
  );
  const [facultyFilterValue, setFacultyFilterValue] = useState("All");
  const getConferenceFaculty = () => {
    Axios.get("http://localhost:3001/ShowConferenceFaculty").then(
      (response) => {
        // console.log(response);
        setConferenceFacultyList(response.data);
      }
    );
    // console.log(conferenceFacultyList);
    conferenceFacultyList.map((val) => {
      if (val.faculty.includes(",")) {
        var tempList = val.faculty.split(",");
        tempList.map((value) => {
          if (individualTempFacultyList.includes(value.trim()) === false) {
            individualTempFacultyList.push(value.trim());
          }
        });
      } else {
        if (individualTempFacultyList.includes(val.faculty) === false) {
          individualTempFacultyList.push(val.faculty);
        }
      }
    });
    // console.log(individualTempFacultyList);
  };
  getConferenceFaculty();

  const [conferenceSponsoringAgencyList, setConferenceSponsoringAgencyList] =
    useState([]);
  const [sponsoringAgencyFilterValue, setSponsoringAgencyFilterValue] =
    useState("All");
  const getConferenceSponsoringAgency = () => {
    Axios.get("http://localhost:3001/ShowConferenceSponsoringAgency").then(
      (response) => {
        // console.log(response);
        setConferenceSponsoringAgencyList(response.data);
      }
    );
  };
  getConferenceSponsoringAgency();

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
              style={{ color: "black", textDecoration: "none" }}
              href="/Journal"
            >
              Journal
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
              <h2 style={{ opacity: "100%", fontSize: "30px" }}>CONFERENCE</h2>
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
                <label>Faculty : </label>
                <select
                  name="Faculty"
                  id="Faculty"
                  onChange={(event) => {
                    setFacultyFilterValue(event.target.value);
                  }}
                >
                  <option value="All">All</option>
                  {individualTempFacultyList.map((val, key) => {
                    return <option value={val}>{val}</option>;
                  })}
                </select>
              </div>
              <div class="dropdown2">
                <label>Sponsoring Agency : </label>
                <select
                  name="Sponsoring Agency"
                  id="Sponsoring Agency"
                  onChange={(event) => {
                    setSponsoringAgencyFilterValue(event.target.value);
                  }}
                >
                  <option value="All">All</option>
                  {conferenceSponsoringAgencyList.map((val, key) => {
                    return (
                      <option value={val.sponsoring_agency}>
                        {val.sponsoring_agency}
                      </option>
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
                    <th style={tableElements}>Sno</th>
                    <th style={tableElements}>Faculty</th>
                    <th style={tableElements}>Title</th>
                    <th style={tableElements}>From</th>
                    <th style={tableElements}>To</th>
                    <th style={tableElements}>Sponsoring Agency</th>
                  </tr>
                  {/* {conferenceList.map((val, key) => {
                    return (
                      <tr key={val.s_no}>
                        <td style={tableElements}>{val.s_no}</td>
                        <td style={tableElements}>{val.faculty}</td>
                        <td style={tableElements}>{val.title}</td>
                        <td style={tableElements}>{val.fromDate}</td>
                        <td style={tableElements}>{val.toDate}</td>
                        <td style={tableElements}>{val.sponsoring_agency}</td>
                      </tr>
                    );
                  })} */}
                  {conferenceList
                    .filter((val) => {
                      if (searchItem === "") {
                        if (
                          facultyFilterValue === "All" &&
                          sponsoringAgencyFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          val.faculty.includes(facultyFilterValue) &&
                          sponsoringAgencyFilterValue === val.sponsoring_agency
                        ) {
                          return val;
                        }
                        else if (
                          facultyFilterValue === "All" &&
                          sponsoringAgencyFilterValue === val.sponsoring_agency
                        ) {
                          return val;
                        }
                        else if (
                          val.faculty.includes(facultyFilterValue) &&
                          sponsoringAgencyFilterValue === "All"
                        ) {
                          return val;
                        }
                      } else if (
                        val.faculty
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.title
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.fromDate
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.toDate
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.sponsoring_agency
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((val, key) => {
                      return (
                        <tr key={val.s_no}>
                          <td style={tableElements}>{val.s_no}</td>
                          <td style={tableElements}>{val.faculty}</td>
                          <td style={tableElements}>{val.title}</td>
                          <td style={tableElements}>{val.fromDate}</td>
                          <td style={tableElements}>{val.toDate}</td>
                          <td style={tableElements}>{val.sponsoring_agency}</td>
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

export default Conference;
