import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddBooks() {
  const [emp_id, setEmp_Id] = useState("");
  const [title_of_book, setTitle_Of_Book] = useState("");
  const [isbn_number, setIsbn_Number] = useState("");
  const [co_author, setCo_Author] = useState("");
  const [yop, setYop] = useState("");
  const [name_of_publisher, setName_Of_Publisher] = useState("");
  

  const [booksList, setbooksList] = useState([]);


  
  const addBooks = () => {
    Axios.post("http://localhost:3001/AddBooks", {
     emp_id : emp_id ,
     title_of_book : title_of_book ,
     isbn_number : isbn_number ,
     co_author : co_author ,
     yop : yop ,
     name_of_publisher : name_of_publisher ,

    }).then(() => {
      console.log("success");
      setbooksList([
        ...booksList,
        {
            emp_id : emp_id ,
            title_of_book : title_of_book ,
            isbn_number : isbn_number ,
            co_author : co_author ,
            yop : yop ,
            name_of_publisher : name_of_publisher ,
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
                ADD BOOK DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>Employee ID</label>
                      <input
                        style={{ marginLeft: "86px", width: "400px" }}
                        type="text"
                        onChange={(event) => {
                          setEmp_Id(event.target.value);
                        }}
                        placeholder="Employee Name"
                      />
                      <div>
                       Title of the Book:{""}
                        <input
                          style={{ marginLeft: "105px", width: "400px" }}
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
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setIsbn_Number(event.target.value);
                          }}
                          placeholder="Isbn number"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Co-Author:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setCo_Author(event.target.value);
                          }}
                          placeholder="Co Author"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Year of Publication:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setYop(event.target.value);
                          }}
                          placeholder="Year"
                        />
                        &nbsp;
                      </div>
                      <div>
                      Name of Publisher:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
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
                      onClick={addBooks}
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
