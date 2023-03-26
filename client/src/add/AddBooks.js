import "./styles.css";
import { useState } from "react";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddBooks() {
  const [emp_id, setEmp_Id] = useState("");
  const [title_of_book, setTitle_Of_Book] = useState("");
  const [isbn_number, setIsbn_Number] = useState("");
  const [co_author, setCo_Author] = useState("");
  const [yop, setYop] = useState("");
  const [name_of_publisher, setName_Of_Publisher] = useState("");

  const [booksList, setbooksList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emp_id === "") {
      alert("Employee ID is required");
      return;
    }
    if (title_of_book === "") {
      alert("Title of book is required");
      return;
    }
    if (isbn_number === "") {
      alert("ISBN is required");
      return;
    }
    if (co_author === "") {
      alert("Co-Author field is required");
      return;
    }
    if (yop === "") {
      alert("Year of Publication is required");
      return;
    }
    if (name_of_publisher === "") {
      alert("Name of publisher is required");
      return;
    }
    addBooks();
  };

  const addBooks = () => {
    Axios.post("http://localhost:3001/AddBooks", {
      emp_id: empIdFilterValue,
      title_of_book: title_of_book,
      isbn_number: isbn_number,
      co_author: co_author,
      yop: yop,
      name_of_publisher: name_of_publisher,
    }).then(() => {
      console.log("success");
      setbooksList([
        ...booksList,
        {
          emp_id: empIdFilterValue,
          title_of_book: title_of_book,
          isbn_number: isbn_number,
          co_author: co_author,
          yop: yop,
          name_of_publisher: name_of_publisher,
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
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
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
                ADD BOOK DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>Employee ID</label>
                      <select
                        style={{ marginLeft: "105px" }}
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
                        Title of the Book:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setTitle_Of_Book(event.target.value);
                          }}
                          placeholder="Title"
                        />
                      </div>
                      <div>
                        ISBN Number:{""}
                        <input
                          style={{ marginLeft: "90px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setIsbn_Number(event.target.value);
                          }}
                          placeholder="ISBN number"
                        />
                        &nbsp;
                      </div>
                      <div>
                        Co-Author:{""}
                        <input
                          style={{ marginLeft: "110px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setCo_Author(event.target.value);
                          }}
                          placeholder="Co Author"
                        />
                        &nbsp;
                      </div>
                      <div>
                        Date of Publication:{""}
                        {/* <input
                          style={{ marginLeft: "55px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setYop(event.target.value);
                          }}
                          placeholder="Year"
                        /> */}
                        <DatePicker
                          // style={{ marginLeft: "205px", width: "400px" }}
                          selected={yop}
                          onChange={(date) => setYop(date)}
                          dateFormat="yyyy-MM-dd" 
                        />
                        &nbsp;
                      </div>
                      <div>
                        Name of Publisher:{""}
                        <input
                          style={{ marginLeft: "60px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setName_Of_Publisher(event.target.value);
                          }}
                          placeholder="Name of Publisher"
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

export default AddBooks;
