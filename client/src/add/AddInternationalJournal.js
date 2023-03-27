import "./styles.css";
import { useState } from "react";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    console.log(
      emp_id +
        title_of_paper +
        author_names +
        journal_name +
        issn_no +
        dop +
        page_no +
        volume_no +
        int_issue_num +
        category +
        scopus_snip_num +
        ugc_list_num
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emp_id === "" && empIdFilterValue === "") {
      alert("Employee ID is required");
      return;
    }
    if (title_of_paper === "") {
      alert("Paper title is required");
      return;
    }
    if (author_names === "") {
      alert("Author name is required");
      return;
    }
    if (journal_name === "") {
      alert("Journal title is required");
      return;
    }
    if (issn_no === "") {
      alert("ISSN is required");
      return;
    }
    if (dop === "") {
      alert("Date of Publish is required");
      return;
    }
    if (page_no === "") {
      alert("Page number is required");
      return;
    }
    if (page_no === "") {
      alert("Number of pages is required");
      return;
    }
    if (volume_no === 0) {
      alert("volume number is required");
      return;
    }
    if (int_issue_num === 0) {
      alert("International Issue number is required");
      return;
    }
    if (category === "") {
      alert("Category is required");
      return;
    }
    if (scopus_snip_num === "") {
      alert("Scopus is required");
      return;
    }
    if (ugc_list_num === "") {
      alert("UGC number is required");
      return;
    }

    addInternationalJournal();
  };

  const addInternationalJournal = () => {
    Axios.post("http://localhost:3001/AddInternationalJournal", {
      emp_id: empIdFilterValue,
      title_of_paper: title_of_paper,
      author_names: author_names,
      journal_name: journal_name,
      issn_no: issn_no,
      dop: dop,
      page_no: page_no,
      volume_no: volume_no,
      int_issue_num: int_issue_num,
      category: category,
      scopus_snip_number: scopus_snip_num,
      ugc_list_number: ugc_list_num,
    }).then(() => {
      console.log("success");
      setinternationaljournalList([
        ...internationaljournalList,
        {
          emp_id: empIdFilterValue,
          title_of_paper: title_of_paper,
          author_names: author_names,
          journal_name: journal_name,
          issn_no: issn_no,
          dop: dop,
          page_no: page_no,
          volume_no: volume_no,
          int_issue_num: int_issue_num,
          category: category,
          scopus_snip_number: scopus_snip_num,
          ugc_list_number: ugc_list_num,
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
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
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
                ADD INTERNATIONAL JOURNAL DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>Employee Id: </label>
                      <select
                        style={{ marginLeft: "150px" }}
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
                          if (val.emp_id == "") {
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
                        Title of Journal:{""}
                        <input
                          style={{ marginLeft: "135px", width: "400px" }}
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
                          style={{ marginLeft: "140px", width: "400px" }}
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
                          style={{ marginLeft: "140px", width: "400px" }}
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
                          style={{ marginLeft: "175px", width: "400px" }}
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
                        {/* <input
                          style={{ marginLeft: "105px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setDop(event.target.value);
                          }}
                          placeholder="Date of Publication"
                        /> */}
                        <DatePicker
                          // style={{ marginLeft: "205px", width: "400px" }}
                          selected={dop}
                          onChange={(date) => setDop(date)}
                          dateFormat="yyyy-MM-dd"
                        />
                        &nbsp;
                      </div>
                      <div>
                        Page Number:{""}
                        <input
                          style={{ marginLeft: "140px", width: "400px" }}
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
                          style={{ marginLeft: "120px", width: "400px" }}
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
                          style={{ marginLeft: "50px", width: "400px" }}
                          onChange={(event) => {
                            setInt_Issue_Num(event.target.value);
                          }}
                          placeholder="International Issue Number"
                        />
                        &nbsp;
                      </div>
                      <div>
                        Category:{""}
                        <select
                          style={{ marginLeft: "165px" }}
                          value={category}
                          onChange={(event) => {
                            setCategory(event.target.value);
                          }}
                        >
                          <option value="">Select Category</option>
                          <option value="Scopus">Scopus</option>
                          <option value="SCI & Scopus">SCI & Scopus</option>
                          <option value="Google Scholar">Google Scholar</option>
                          <option value="UGC CARE">UGC CARE</option>
                          <option value="Scopus and UGC-CARE">
                            Scopus and UGC-CARE
                          </option>
                          {/* Add more options as needed */}
                        </select>
                        &nbsp;
                      </div>
                      <div>
                        Scopus Snip Number:{""}
                        <input
                          style={{ marginLeft: "85px", width: "400px" }}
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
                          style={{ marginLeft: "100px", width: "400px" }}
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
export default AddInternationalJournal;
