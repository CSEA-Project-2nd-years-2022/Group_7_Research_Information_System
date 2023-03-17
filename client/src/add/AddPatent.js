import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddPatent() {
  const [emp_id, setEmp_Id] = useState("");
  const [num_patent, setNum_Patent] = useState(0);
  const [num_patent_granted, setNum_Patent_Granted] = useState(0);
  const [num_patent_liscenced, setNum_Patent_Lisenced] = useState(0);
  const [patent_number, setPatent_Number] = useState("");
  const [date_award, setDate_Award] = useState("");
  const [patent_title, setPatent_Title] = useState("");
  

  const [patentList, setpatentList] = useState([]);

 

  
  const addPatent = () => {
    Axios.post("http://localhost:3001/AddPatent", {
      emp_id : emp_id,
      num_patent : num_patent ,
      num_patent_granted : num_patent_granted ,
      num_patent_liscenced : num_patent_liscenced ,
      patent_number :  patent_number ,
      date_award :  date_award ,
      patent_title ,
    }).then(() => {
      console.log("success");
      setpatentList([
        ...patentList,
        {
            emp_id : emp_id,
      num_patent : num_patent ,
      num_patent_granted : num_patent_granted ,
      num_patent_liscenced : num_patent_liscenced ,
      patent_number :  patent_number ,
      date_award :  date_award ,
      patent_title ,
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
                ADD PATENT DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>Employee ID </label>
                      <input
                        style={{ marginLeft: "86px", width: "400px" }}
                        type="text"
                        onChange={(event) => {
                          setEmp_Id(event.target.value);
                        }}
                        placeholder="ID"
                      />
                      <div>
                        Number of Patents:{""}
                        <input
                          style={{ marginLeft: "105px", width: "400px" }}
                          type="number"
                          onChange={(event) => {
                            setNum_Patent(event.target.value);
                          }}
                          placeholder="total numbe of patents"
                        />
                      </div>
                      <div>
                      Number of Granted Patents:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="number"
                          onChange={(event) => {
                            setNum_Patent_Granted(event.target.value);
                          }}
                          placeholder="Granted Patents"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Number of Lisenced Patents:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="number"
                          onChange={(event) => {
                            setNum_Patent_Lisenced(event.target.value);
                          }}
                          placeholder="Lisenced Patents"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Patent Number:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setPatent_Number(event.target.value);
                          }}
                          placeholder="Patent Number"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Date of Award:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setDate_Award(event.target.value);
                          }}
                          placeholder="Date"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Patent Title:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setPatent_Title(event.target.value);
                          }}
                          placeholder="Paptent title"
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
                      onClick={addPatent}
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

export default AddPatent;
