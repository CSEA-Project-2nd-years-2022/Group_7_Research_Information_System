import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddInternationalConference() {
  const [emp_id, setEmp_Id] = useState("");
  const [paper_title, setPaper_Title] = useState("");
  const [coauthour_name, setCoauthour_Name] = useState("");
  const [conference_title, setConference_Title] = useState("");
  const [organizing_institution, setOrganizing_Institution] = useState("");
  const [date, setDate] = useState("");
  const [paper_scopus, setPaper_Scopus] = useState("");
  const [no_pages, setNo_Pages] = useState("");
  const [proceedings_title, setProceedings_Title] = useState("");
  const [total_num_published, setTotal_Num_Published] = useState(0);
  const [category, setCategory] = useState("");

  const [internationalconferenceList, setinternationalconferenceList] = useState([]);

 

  
  const addInternationalConference = () => {
    Axios.post("http://localhost:3001/AddInternationalConference", {
      emp_id : emp_id,
      paper_title : paper_title ,
      coauthour_name : coauthour_name ,
      conference_title : conference_title ,
      organizing_institution : organizing_institution ,
      date : date ,
      paper_scopus : paper_scopus ,
      no_pages : no_pages ,
      proceedings_title : proceedings_title ,
      total_num_published : total_num_published ,
      category :category,
    }).then(() => {
      console.log("success");
      setinternationalconferenceList([
        ...internationalconferenceList,
        {
            emp_id : emp_id,
            paper_title : paper_title ,
            coauthour_name : coauthour_name ,
            conference_title : conference_title ,
            organizing_institution : organizing_institution ,
            date : date ,
            paper_scopus : paper_scopus ,
            no_pages : no_pages ,
            proceedings_title : proceedings_title ,
            total_num_published : total_num_published ,
            category :category,
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
                ADD INTERNATIONAL CONFERENCE DETAILS
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
                        Title of Paper:{""}
                        <input
                          style={{ marginLeft: "105px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setPaper_Title(event.target.value);
                          }}
                          placeholder="Title"
                        />
                      </div>
                      <div>
                       Names of Co-Authors:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setCoauthour_Name(event.target.value);
                          }}
                          placeholder="Names"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Title of Conference:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setConference_Title(event.target.value);
                          }}
                          placeholder="Title"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Organizing Institution:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setOrganizing_Institution(event.target.value);
                          }}
                          placeholder="Organizer"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Date of Conference:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setDate(event.target.value);
                          }}
                          placeholder="Date"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Paper Scopus:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setPaper_Scopus(event.target.value);
                          }}
                          placeholder="Paper"
                        />
                        &nbsp;
                      </div>
                      <div>
                     Number of Pages:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setNo_Pages(event.target.value);
                          }}
                          placeholder="Pages"
                        />
                        &nbsp;
                      </div>
                      <div>
                     Proceedings Title:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setProceedings_Title(event.target.value);
                          }}
                          placeholder="Title"
                        />
                        &nbsp;
                      </div>
                      <div>
                        Total Number of Papers Published:{}
                        <input
                          type="number"
                          style={{ marginLeft: "83px", width: "400px" }}
                          onChange={(event) => {
                            setTotal_Num_Published(event.target.value);
                          }}
                          placeholder="Total"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Category of Paper Published:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setCategory(event.target.value);
                          }}
                          placeholder="Category"
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
                      onClick={addInternationalConference}
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

export default AddInternationalConference;
