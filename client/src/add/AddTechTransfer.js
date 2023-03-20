import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddTechTransfer() {
  const [emp_id, setEmp_ID] = useState("");
  const [num_tech_tran, setNum_Tech_Tran] = useState(0);
  const [title_tech_tran, setTitle_Tech_Tran] = useState("");
  const [industry_alliance, setIndustry_Alliance] = useState("");
  const [num_people_inloved, setNum_People_Inloved] = useState(0);

  const [techtransferList, settechtransferList] = useState([]);

  const displayInfo = () => {
    console.log(
      emp_id +
        num_tech_tran +
        title_tech_tran +
        industry_alliance +
        num_people_inloved
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (emp_id === "") {
    alert("Employee ID is required");
    return;
    }
    if (num_tech_tran === 0) {
    alert("Number of tech transfers is required");
    return;
    }
    if (title_tech_tran === "") {
    alert("Title of tech transfer is required");
    return;
    }
    if (industry_alliance === "") {
    alert("Industry alliance is required");
    return;
    }
    if (num_people_inloved === 0) {
    alert("Number of people involved is required");
    return;
    }
    addTechTransfer();
    };
  const addTechTransfer = () => {
    Axios.post("http://localhost:3001/AddTechTransfer", {
      emp_id: empIdFilterValue,
      num_tech_tran: num_tech_tran,
      tile_tech_tran: title_tech_tran,
      industry_alliance: industry_alliance,
      num_people_inloved: num_people_inloved,
    }).then(() => {
      console.log("success");
      settechtransferList([
        ...techtransferList,
        {
          emp_id: empIdFilterValue,
          num_tech_tran: num_tech_tran,
          tile_tech_tran: title_tech_tran,
          industry_alliance: industry_alliance,
          num_people_inloved: num_people_inloved,
        },
      ]);
    });
  };
  //Emp Id
  const [empIdList, setEmpIdList] = useState([]);
  const [empIdFilterValue, setEmpIdFilterValue] = useState("");
  const getEmpId = () => {
    Axios.get("http://localhost:3001/ShowEmpId").then((response) => {
      console.log(empIdList);
      setEmpIdList(response.data);
    });
  };
  getEmpId();

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
              style={{ color: "black", textDecoration: "none" }}
              href="/Login/AddSponsoredResearchProjects"
            >
              Add Sponsored Research Projects
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
                ADD TECHNOLOGY TRANSFER DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>Employee ID: </label>
                      <select
                      style={{ marginLeft: "185px"}}
                        name="EmpId"
                        id="EmpId"
                        onChange={(event) => {
                          setEmpIdFilterValue(event.target.value);
                          console.log(empIdFilterValue);
                        }}
                      >
                        <option value="" selected>
                          None Selected
                        </option>
                        {empIdList.map((val, key) => {
                          if (val.emp_id == null) {
                            return;
                          }
                          console.log(val.emp_id);
                          key = val.emp_id;
                          return (
                            <option value={val.emp_id}>{val.emp_id}</option>
                          );
                        })}
                      </select>
                      <div>
                        Number of techlogy transfers done:{}
                        <input
                          type="number"
                          style={{ marginLeft: "50px", width: "400px" }}
                          onChange={(event) => {
                            setNum_Tech_Tran(event.target.value);
                          }}
                          placeholder="No. of technology transfers done"
                        />
                        &nbsp;
                      </div>
                      <div>
                        Title of Technology Transfer:{""}
                        <input
                          style={{ marginLeft: "90px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setTitle_Tech_Tran(event.target.value);
                          }}
                          placeholder="Title of Technology Transfer"
                        />
                      </div>
                      <div>
                        Industry Alliance:{""}
                        <input
                          style={{ marginLeft: "165px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setIndustry_Alliance(event.target.value);
                          }}
                          placeholder="Industry Alliance"
                        />
                        &nbsp;
                      </div>
                      <div>
                        Number of People Involved:{}
                        <input
                          type="number"
                          style={{ marginLeft: "95px", width: "400px" }}
                          onChange={(event) => {
                            setNum_People_Inloved(event.target.value);
                          }}
                          placeholder="No. of people involved "
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

export default AddTechTransfer;
