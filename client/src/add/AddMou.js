import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddMou() {
  const [emp_id, setEmp_Id] = useState("");
  const [organization_name, setOrganization_Name] = useState("");
  const [date_mou_signed, setDate_Mou_Signed] = useState("");
  const [purpose_activities, setPurpose_Activities] = useState("");
  const [num_participants, setNum_Participants] = useState("");
  const [title_mou, setTitle_Mou] = useState("");
  

  const [mouList, setmouList] = useState([]);

  const displayInfo = () => {
    console.log(emp_id	+ organization_name	 + date_mou_signed  +	purpose_activities + 	num_participants +	title_mou);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emp_id === "") {
    alert("Employee ID is required");
    return;
    }
    if (organization_name === "") {
    alert("Organization Name  is required");
    return;
    }
    if (date_mou_signed === "") {
    alert("Date is required");
    return;
    }
    if (purpose_activities=== "") {
    alert("Purpose is required");
    return;
    }
    if (num_participants === "") {
    alert("Number of Participants is required");
    return;
    }
    if (title_mou === "") {
      alert("Title is required");
      return;
      }
  
    addMou();
    };

  
  const addMou = () => {
    Axios.post("http://localhost:3001/AddMou", {
      emp_id : emp_id ,
      organization_name : organization_name ,
      date_mou_signed :date_mou_signed ,
      purpose_activities :purpose_activities ,
      num_participants : num_participants ,
      title_mou : title_mou ,
    }).then(() => {
      console.log("success");
      setmouList([
        ...mouList,
        {
            emp_id : emp_id ,
            organization_name : organization_name ,
            date_mou_signed :date_mou_signed ,
            purpose_activities :purpose_activities ,
            num_participants : num_participants ,
            title_mou : title_mou ,
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
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
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
                ADD MOU DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>Employee Id </label>
                      <input
                        style={{ marginLeft: "100px", width: "400px" }}
                        type="text"
                        onChange={(event) => {
                          setEmp_Id(event.target.value);
                        }}
                        placeholder="ID"
                      />
                      <div>
                        Organization Name{""}
                        <input
                          style={{ marginLeft: "60px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setOrganization_Name(event.target.value);
                          }}
                          placeholder="Organization Name"
                        />
                      </div>
                      <div>
                       Date of MOU{""}
                        <input
                          style={{ marginLeft: "95px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setDate_Mou_Signed(event.target.value);
                          }}
                          placeholder="Date"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Purpose and Activities{""}
                        <input
                          style={{ marginLeft: "40px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setPurpose_Activities(event.target.value);
                          }}
                          placeholder="Purpose"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Number of Participants:{""}
                        <input
                          style={{ marginLeft: "30px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setNum_Participants(event.target.value);
                          }}
                          placeholder="Number of Participants"
                        />
                        &nbsp;
                      </div>
                      <div>
                      TITLE OF MOU :{""}
                        <input
                          style={{ marginLeft: "65px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setTitle_Mou(event.target.value);
                          }}
                          placeholder="Title"
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
                      onClick={addMou}
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

export default AddMou;
