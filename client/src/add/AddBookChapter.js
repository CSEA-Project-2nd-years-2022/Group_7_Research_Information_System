import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddBookChapter() {
  const [emp_id, setEmp_Id] = useState("");
  const [title_book_chapter, setTitle_Book_Chapter] = useState("");
  const [title_book, setTitle_Book] = useState("");
  const [isbn_number, setIsbn_Number] = useState("");
  const [co_author, setCo_Author] = useState("");
  const [yop, setYop] = useState("");
  const [publisher_name, setPublisher_Name] = useState("");
 

  const [bookchapterList, setbookchapterList] = useState([]);

  const displayInfo = () => {
    console.log(emp_id +	title_book_chapter +	title_book +	isbn_number	 + co_author	+ yop	 + publisher_name );																		
  };


  
  const addBookChapter = () => {
    Axios.post("http://localhost:3001/AddBookChapter", {
      emp_id : emp_id ,
      title_book_chapter : title_book_chapter ,
      title_book : title_book ,
      isbn_number : isbn_number ,
      co_author : co_author ,
      yop : yop ,
      publisher_name : publisher_name ,
    }).then(() => {
      console.log("success");
      setbookchapterList([
        ...bookchapterList,
        {
          emp_id : emp_id ,
      title_book_chapter : title_book_chapter ,
      title_book : title_book ,
      isbn_number : isbn_number ,
      co_author : co_author ,
      yop : yop ,
      publisher_name : publisher_name ,
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
                ADD BOOK CHAPTER DETAILS
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
                        placeholder="Id"
                      />
                      <div>
                       Title of Book Chapter{""}
                        <input
                          style={{ marginLeft: "105px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setTitle_Book_Chapter(event.target.value);
                          }}
                          placeholder=" Chapter Title"
                        />
                      </div>
                      <div>
                       Title of Book:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setTitle_Book(event.target.value);
                          }}
                          placeholder="Book Title"
                        />
                        &nbsp;
                      </div>
                      <div>
                       ISBN :{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setIsbn_Number(event.target.value);
                          }}
                          placeholder="ISBN"
                        />
                        &nbsp;
                      </div>
                      <div>
                       Co-Author{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setCo_Author(event.target.value);
                          }}
                          placeholder="Co-Authors"
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
                       Publisher Name:{""}
                        <input
                          style={{ marginLeft: "75px", width: "400px" }}
                          type="text"
                          onChange={(event) => {
                            setPublisher_Name(event.target.value);
                          }}
                          placeholder="Publisher"
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
                      onClick={addBookChapter}
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

export default AddBookChapter;
