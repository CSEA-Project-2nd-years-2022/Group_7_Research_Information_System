import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddConsultancy() {
  const [emp_id, setEmp_Id] = useState("");
  const [name_consultant_departement, setName_Consultant_Department] = useState("");
  const [name_consultancy, setName_Consultancy] = useState("");
  const [consulting_agency, setConsulting_Agency] = useState("");
  const [revenue_generated, setRevenue_Generated] = useState("");
  const [grant_released, setGrant_Released] = useState("");
  const [status, setStatus] = useState("");
 

  const [consultancyList, setconsultancyList] = useState([]);

  const displayInfo = () => {
    console.log(emp_id +	name_consultant_departement +	name_consultancy +	consulting_agency	+ revenue_generated + grant_released + status);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (emp_id === "") {
    alert("Employee ID is required");
    return;
    }
    if (name_consultant_departement === "") {
    alert("Name of consultant department is required");
    return;
    }
    if (name_consultancy === "") {
    alert("Name of Consultancy is required");
    return;
    }
    if (consulting_agency === "") {
    alert("Name of Consulting Agency is required is required");
    return;
    }
    if (revenue_generated === "") {
    alert("Revenue Generated is required");
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
    addConsultancy();
    };

  
  const addConsultancy = () => {
    Axios.post("http://localhost:3001/AddConsultancy", {
     emp_id : emp_id ,
     name_consultant_departement : name_consultant_departement ,
     name_consultancy : name_consultancy ,
     consulting_agency : consulting_agency ,
     revenue_generated : revenue_generated ,
     grant_released : grant_released ,
     status : status ,
    }).then(() => {
      console.log("success");
      setconsultancyList([
        ...consultancyList,
        {
            emp_id : emp_id ,
            name_consultant_departement : name_consultant_departement ,
            name_consultancy : name_consultancy ,
            consulting_agency : consulting_agency ,
            revenue_generated : revenue_generated ,
            grant_released : grant_released ,
            status : status ,
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
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
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
              style={{ color: "black", textDecoration: "none" }}
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
                ADD CONSULTANCY DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>Employee Id </label>
                      <input
                        style={{ marginLeft: "86px", width: "400px" }}
                        type="text"
                        onChange={(event) => {
                          setEmp_Id(event.target.value);
                        }}
                        placeholder="Employee Id"
                      />
                      <div>
                        Name of Consultant Departement{""}
                        <input
                          style={{ marginLeft: "105px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setName_Consultant_Department(event.target.value);
                          }}
                          placeholder="Consultancy Departement"
                        />
                      </div>
                      <div>
                        Name of Consultancy:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setName_Consultancy(event.target.value);
                          }}
                          placeholder="Consultancy"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Consulting Agency:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setConsulting_Agency(event.target.value);
                          }}
                          placeholder="Consulting Agency"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Revenue Generated:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setRevenue_Generated(event.target.value);
                          }}
                          placeholder="Revenue"
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
                          placeholder="Grant"
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
                          placeholder="Status"
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

export default AddConsultancy;
