import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddSponsoredResearchProjects() {
  const [emp_id, setEmp_Id] = useState("");
  const [project_name, setProject_Name] = useState("");
  const [funding_agency, setFunding_Agency] = useState("");
  const [total_grant_sanctioned, setTotal_Grant_Sanctioned] = useState("");
  const [principal_investigator, setPrincipal_Investigator] = useState("");
  const [coprincipal_investigator, setCoprincipal_Investigator] = useState("");
  const [duration, setDuration] = useState("");
  const [grant_released, setGrant_Released] = useState("");
  const [status, setStatus] = useState("");
  
  const [sponsoredresearchprojectList, setsponsoredresearchprojectsList] = useState([]);

  const displayInfo = () => {
    console.log(emp_id + project_name + funding_agency + total_grant_sanctioned + principal_investigator + coprincipal_investigator + duration + grant_released + status);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (emp_id === "") {
    alert("Employee ID is required");
    return;
    }
    if (project_name === "") {
    alert("Project Name is required");
    return;
    }
    if (funding_agency === "") {
    alert("Funding Agency is required");
    return;
    }
    if (total_grant_sanctioned=== "") {
    alert("Total Gran is Sanctioned is required");
    return;
    }
    if (principal_investigator === "") {
    alert("Principal Investigator is required");
    return;
    }
    if (coprincipal_investigator === "") {
      alert("Co-Principal Investigator is required");
      return;
      }
      if (duration === "") {
        alert("Duration is required");
        return;
        }
        if (grant_released === "") {
          alert("Grant Released is required");
          return;
          }
          if (status === "") {
            alert("Status is required");
            return;
            }

        
        
    addSponsoredResearchProjects();
    };

  
  const addSponsoredResearchProjects = () => {
    Axios.post("http://localhost:3001/AddSponsoredResearchProjects", {
     emp_id :emp_id,
     project_name :project_name,
     funding_agency : funding_agency,
     total_grant_sanctioned : total_grant_sanctioned ,
     principal_ivestigator :  principal_investigator ,
     coprincipal_investigator :coprincipal_investigator ,
     duration: duration ,
     grant_released : grant_released ,
     status : status,
    }).then(() => {
      console.log("success");
      setsponsoredresearchprojectsList([
        ...sponsoredresearchprojectList,
        {
          emp_id :emp_id,
     project_name :project_name,
     funding_agency : funding_agency,
     total_grant_sanctioned : total_grant_sanctioned ,
     principal_ivestigator :  principal_investigator ,
     coprincipal_investigator :coprincipal_investigator ,
     duration: duration ,
     grant_released : grant_released ,
     status : status,
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
            height: "1500px",
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
              href="/Login/AddEmployee"
            >
              Add Employee
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddCitation"
            >
              Add Citations
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddBookChapter"
            >
              Add BookChapter
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddBooks"
            >
              Add Books
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddInternationalConference"
            >
              Add International Conference
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddInternationalJournal"
            >
              Add International Journal
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddMou"
            >
              Add Mou
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddPatent"
            >
              Add Patent
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddPublicationCount"
            >
              Add Publication Count
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
              href="/Login/AddSponsoredResearchProjects"
            >
              Add Sponsored Research Projects
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddTechTransfer"
            >
              Add Tech Transfer
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
                ADD SPONSERED RESEARCH PROJECT DETAILS DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>EMPLOYEE ID: </label>
                      <input
                        style={{ marginLeft: "96px", width: "400px" }}
                        type="text"
                        onChange={(event) => {
                          setEmp_Id(event.target.value);
                        }}
                        placeholder="Employee id"
                      />
                      <div>
                       Project Name:{""}
                        <input
                          style={{ marginLeft: "120px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setProject_Name(event.target.value);
                          }}
                          placeholder="Project Name"
                        />
                      </div>
                      <div>
                       Funding Agency:{""}
                        <input
                          style={{ marginLeft: "100px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setFunding_Agency(event.target.value);
                          }}
                          placeholder="Funding Agency"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Total Grant Sanctioned:{""}
                        <input
                          style={{ marginLeft: "60px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setTotal_Grant_Sanctioned(event.target.value);
                          }}
                          placeholder="Grant Sanctioned"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Principal Investigator:{""}
                        <input
                          style={{ marginLeft: "65px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setPrincipal_Investigator(event.target.value);
                          }}
                          placeholder="Principal Investigator"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Co-Principal Investigator:{""}
                        <input
                          style={{ marginLeft: "45px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setCoprincipal_Investigator(event.target.value);
                          }}
                          placeholder="Co-principal Investigator"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Duration:{""}
                        <input
                          style={{ marginLeft: "150px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setDuration(event.target.value);
                          }}
                          placeholder="Duration"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Grant Released:{""}
                        <input
                          style={{ marginLeft: "105px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setGrant_Released(event.target.value);
                          }}
                          placeholder="Grant Released"
                        />
                        &nbsp;
                      </div>
                      
                      <div>
                       Status:{""}
                        <input
                          style={{ marginLeft: "160px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setStatus(event.target.value);
                          }}
                          placeholder="Status of Project"
                        />
                        &nbsp;
                      </div>
                     
                      <br />
                      <br />
                    </div>
                    <button
                      class="add-submit"
                      style={{ marginLeft: "170px" }}
                      type="submit"
                      onClick={handleSubmit}
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

export default AddSponsoredResearchProjects;
