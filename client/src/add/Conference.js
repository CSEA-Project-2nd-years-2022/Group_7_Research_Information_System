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
              style={{color: "black", textDecoration: "none"
                
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
              style={{ color: "black",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
              textDecoration: "underline", }}
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
              <h2 style={{ opacity: "100%", fontSize: "30px" }}>INTERNATIONAL CONFERENCE</h2>
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
                    <th style={tableElements}>Emp id</th>
                    <th style={tableElements}>Emp Name</th>
                    <th style={tableElements}>Paper Title</th>
                    <th style={tableElements}>Co Author Name</th>
                    <th style={tableElements}>Conference Title</th>
                    <th style={tableElements}>Organising Institution</th>
                    <th style={tableElements}>Paper Scopus</th>
                    <th style={tableElements}>No. of Pages</th>
                    <th style={tableElements}>Proceedings Title</th>
                    <th style={tableElements}>Total no. published</th>
                    <th style={tableElements}>Category</th>
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
                      if (searchItem === "")
                       { return val;
                       
                      } else if (
                        val.emp_name.toLowerCase().includes(searchItem.toLowerCase()) 
                      ) {
                        console.log(val);
                        return val;
                      }
                    })
                    .map((val) => {
                      return (
                        <tr>
                          <td style={tableElements}>{val.emp_id}</td>
                          <td style={tableElements}>{val.emp_name}</td>
                          <td style={tableElements}>{val.paper_title}</td>
                          <td style={tableElements}>{val.coauthour_name}</td>
                          <td style={tableElements}>{val.conference_title}</td>
                          <td style={tableElements}>{val.organizing_institution}</td>
                          <td style={tableElements}>{val.paper_scopus}</td>
                          <td style={tableElements}>{val.no_pages}</td>
                          <td style={tableElements}>{val.proceedings_title}</td>
                          <td style={tableElements}>{val.total_num_published}</td>
                          <td style={tableElements}>{val.category}</td>
                          
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
