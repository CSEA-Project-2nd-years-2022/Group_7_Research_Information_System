import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function AddPublicationCount() {
  const [emp_id, setEmp_Id] = useState("");
  const [num_int_jn, setNum_Int_Jn] = useState(0);
  const [num_nat_jn, setNum_Nat_Jn] = useState(0);
  const [num_int_con, setNum_Int_Con] = useState(0);
  const [num_nat_con, setNum_Nat_Con] = useState(0);
  const [num_book, setNum_Book] = useState(0);
  const [num_chap, setNum_Chap] = useState(0);



  const [publicationcountList, setpublicationcountList] = useState([]);

  const displayInfo = () => {
    console.log(emp_id + num_int_jn + num_nat_jn + num_int_con + num_nat_con + num_book + num_chap);
  };


  
  const addPublicationCount = () => {
    Axios.post("http://localhost:3001/AddPublicationCount", {
      emp_id:emp_id,
      num_int_jn: num_int_jn,
      num_nat_jn: num_nat_jn,
      num_int_con: num_int_con,
      num_nat_con: num_nat_con,
      num_book: num_book,
      num_chap: num_chap,
    }).then(() => {
      console.log("success");
      setpublicationcountList([
        ...publicationcountList,
        {
            emp_id:emp_id,
            num_int_jn: num_int_jn,
            num_nat_jn: num_nat_jn,
            num_int_con: num_int_con,
            num_nat_con: num_nat_con,
            num_book: num_book,
            num_chap: num_chap,
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
                ADD RESEARCH PUBLICATION COUNT DETAILS
              </h2>
              <br />
              <div>
                <div>
                  <form>
                    <div>
                      <label>Employee ID : </label>
                      <input
                        style={{ marginLeft: "86px", width: "400px" }}
                        type="text"
                        onChange={(event) => {
                          setEmp_Id(event.target.value);
                        }}
                        placeholder="Author Name"
                      />
                      <div>
                        No. of Internation Journals :{}
                        <input
                          type="number"
                          style={{ marginLeft: "100px", width: "400px" }}
                          onChange={(event) => {
                            setNum_Int_Jn(event.target.value);
                          }}
                          placeholder="International Journal"
                        />
                        &nbsp;
                      </div>
                      <div>
                        No. of National Journals :{}
                        <input
                          type="number"
                          style={{ marginLeft: "100px", width: "400px" }}
                          onChange={(event) => {
                            setNum_Nat_Jn(event.target.value);
                          }}
                          placeholder="National Journal"
                        />
                        &nbsp;
                      </div>
                      <div>
                        No. of Internation Conference :{}
                        <input
                          type="number"
                          style={{ marginLeft: "100px", width: "400px" }}
                          onChange={(event) => {
                            setNum_Int_Con(event.target.value);
                          }}
                          placeholder="International Conference"
                        />
                        &nbsp;
                      </div>
                      <div>
                        No. of National Conference :{}
                        <input
                          type="number"
                          style={{ marginLeft: "100px", width: "400px" }}
                          onChange={(event) => {
                            setNum_Nat_Con(event.target.value);
                          }}
                          placeholder="National Conference"
                        />
                        &nbsp;
                      </div>
                      <div>
                        No. of Books :{}
                        <input
                          type="number"
                          style={{ marginLeft: "100px", width: "400px" }}
                          onChange={(event) => {
                            setNum_Book(event.target.value);
                          }}
                          placeholder="No. of Books"
                        />
                        &nbsp;
                      </div>
                      <div>
                        No. of Book Chapters :{}
                        <input
                          type="number"
                          style={{ marginLeft: "100px", width: "400px" }}
                          onChange={(event) => {
                            setNum_Chap(event.target.value);
                          }}
                          placeholder="No. of BookChapters"
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
                      onClick={addPublicationCount}
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

export default AddPublicationCount;
