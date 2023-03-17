import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddInternationalJournal() {
  const [emp_id, setEmp_Id] = useState("");
  const [title_of_paper, setTitle_Of_Paper] = useState(""); 
  const [author_names, setAuthor_Names] = useState("");
  const [journal_name, setJournal_Name] = useState("");
  const [issn_no, setIssn_No] = useState("");
  const [dop, setDop] = useState("");
  const [page_no, setPage_No] = useState("");
  const [volume_no, setVolume_No] = useState(0);
  const [int_issue_num, setInt_Issue_Num] = useState(0);
  const [category, setCategory] = useState("");
  const [scopus_snip_num, setScopus_Snip_Num] = useState("");
  const [ugc_list_num, setUgc_List_Num] = useState("");
  

  const [internationaljournalList, setinternationaljournalList] = useState([]);

  const displayInfo = () => {
    console.log(emp_id + title_of_paper	 + author_names +	journal_name + issn_no	+ dop +	page_no	+ volume_no	+int_issue_num	+category	+ scopus_snip_num + ugc_list_num);
  };


  
  const addInternationalJournal = () => {
    Axios.post("http://localhost:3001/AddInternationalJournal", {
      emp_id : emp_id , 
      title_of_paper : title_of_paper , 
      author_names : author_names , 
      journal_name  : journal_name ,
      issn_no	: issn_no ,
       dop : dop	 ,
       page_no : page_no ,
       volume_no : volume_no ,
       int_issue_num	:int_issue_num ,
       category	: category ,
       scopus_snip_number :scopus_snip_num ,
       ugc_list_number : ugc_list_num ,
    }).then(() => {
      console.log("success");
      setinternationaljournalList([
        ...internationaljournalList,
        {
          emp_id : emp_id , 
      title_of_paper : title_of_paper , 
      author_names : author_names , 
      journal_name  : journal_name ,
      issn_no	: issn_no ,
       dop : dop	 ,
       page_no : page_no ,
       volume_no : volume_no ,
       int_issue_num	:int_issue_num ,
       category	: category ,
       scopus_snip_number :scopus_snip_num ,
       ugc_list_number : ugc_list_num ,
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
                ADD INTERNATIONAL JOURNAL DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                  <div>
                  <label>Employee Id: </label>
<input
  style={{ marginLeft: "86px", width: "400px" }}
  type="text"
  onChange={(event) => {
    setEmp_Id(event.target.value);
  }}
  placeholder="Employee ID"
/>
<div>
  Title of Journal:{""}
  <input
    style={{ marginLeft: "105px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setTitle_Of_Paper(event.target.value);
    }}
    placeholder="Title"
  />
</div>
<div>
  Author Names:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setAuthor_Names(event.target.value);
    }}
    placeholder="Author_Names"
  />
  &nbsp;
</div>
<div>
  Journal Name:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setJournal_Name(event.target.value);
    }}
    placeholder="Journal Name"
  />
  &nbsp;
</div>
                     <div>
  Issn_No:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setIssn_No(event.target.value);
    }}
    placeholder="Issn Number"
  />
                        &nbsp;
                      </div>
                      <div>
  Date of Publication:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setDop(event.target.value);
    }}
    placeholder="Date of Publication"
  />
  &nbsp;
</div>
<div>
  Page Number:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setPage_No(event.target.value);
    }}
    placeholder="Page Numbers"
  />
  &nbsp;
</div>
<div>
  Volume Number:{}
  <input
    type="number"
    style={{ marginLeft: "83px", width: "400px" }}
    onChange={(event) => {
      setVolume_No(event.target.value);
    }}
    placeholder="Volume no."
  />
  &nbsp;
</div>
<div>
  International Issue Number:{}
  <input
    type="number"
    style={{ marginLeft: "83px", width: "400px" }}
    onChange={(event) => {
      setInt_Issue_Num(event.target.value);
    }}
    placeholder="International Issue Number"
  />
  &nbsp;
</div>
<div>
 Category:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setCategory(event.target.value);
    }}
    placeholder="Select Category"
  />
  &nbsp;
</div>
<div>
 Scopus Snip Number:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setScopus_Snip_Num(event.target.value);
    }}
    placeholder="Scopus Snip Number"
  />
  &nbsp;
</div>
<div>
  UGC List Number:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setUgc_List_Num(event.target.value);
    }}
    placeholder="UGC List Number"
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
                      onClick={addInternationalJournal}
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
export default AddInternationalJournal;
