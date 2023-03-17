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
                ADD SPONSERED RESEARCH PROJECT DETAILS DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>EMPLOYEE ID: </label>
                      <input
                        style={{ marginLeft: "86px", width: "400px" }}
                        type="text"
                        onChange={(event) => {
                          setEmp_Id(event.target.value);
                        }}
                        placeholder="Employee id"
                      />
                      <div>
                       Project Name:{""}
                        <input
                          style={{ marginLeft: "105px", width: "400px" }}
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
                          style={{ marginLeft: "75px", width: "400px" }}
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
                          style={{ marginLeft: "75px", width: "400px" }}
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
                          style={{ marginLeft: "75px", width: "400px" }}
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
                          style={{ marginLeft: "75px", width: "400px" }}
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
                          style={{ marginLeft: "75px", width: "400px" }}
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
                          style={{ marginLeft: "75px", width: "400px" }}
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
                          style={{ marginLeft: "75px", width: "400px" }}
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
                      onClick={addSponsoredResearchProjects}
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
