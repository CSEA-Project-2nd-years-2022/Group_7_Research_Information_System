import "./styles.css";
import { useState } from "react";
import Axios from "axios";

const tableElements = {
  border: "1px solid black",
  borderCollapse: "collapse",
  columnHeight: "300px",
  paddingTop: "10px",
  paddingBottom: "5px",
  paddingLeft: "10px",
  paddingRight: "10px",
};

function Consolidated() {
  const [yearFilterValue, setYearFilterValue] = useState("All");
  const [internationalJournalCount2022, setInternationalJournalCount2022] =
    useState(0);
  const getIntJourCount2022All = () => {
    Axios.get("http://localhost:3001/ShowInternationalJournalCount2022").then(
      (response) => {
        setInternationalJournalCount2022(response.data[0].c);
      }
    );
  };
  getIntJourCount2022All();

  const [internationalJournalCount2021, setInternationalJournalCount2021] =
    useState(0);
  const getIntJourCount2021All = () => {
    Axios.get("http://localhost:3001/ShowInternationalJournalCount2021").then(
      (response) => {
        setInternationalJournalCount2021(response.data[0].c);
      }
    );
  };
  getIntJourCount2021All();

const [bookChaptersCount2021, setBookChaptersCount2021] =useState(0);
const getBookChapCount2021All = () => {
  Axios.get("http://localhost:3001/ShowBookChaptersCount2021").then(
    (response) => {
      setBookChaptersCount2021(response.data[0].c);
    }
  );
};
getBookChapCount2021All();
const [bookChaptersCount2022, setBookChaptersCount2022] =useState(0);
const getBookChapCount2022All = () => {
  Axios.get("http://localhost:3001/ShowBookChaptersCount2022").then(
    (response) => {
      setBookChaptersCount2022(response.data[0].c);
    }
  );
};
getBookChapCount2022All();

const [booksCount2020, setBooksCount2020] =useState(0);
const getBooksCount2020All = () => {
  Axios.get("http://localhost:3001/ShowBooksCount2020").then(
    (response) => {
      setBooksCount2020(response.data[0].c);
    }
  );
};
getBooksCount2020All();

const [booksCount2021, setBooksCount2021] =useState(0);
const getBooksCount2021All = () => {
  Axios.get("http://localhost:3001/ShowBooksCount2021").then(
    (response) => {
      setBooksCount2021(response.data[0].c);
    }
  );
};
getBooksCount2021All();

const [booksCount2022, setBooksCount2022] =useState(0);
const getBooksCount2022All = () => {
  Axios.get("http://localhost:3001/ShowBooksCount2022").then(
    (response) => {
      setBooksCount2022(response.data[0].c);
    }
  );
};
getBooksCount2022All();

const [patentsCount2022, setPatentsCount2022] =useState(0);
const getPatentsCount2022All = () => {
  Axios.get("http://localhost:3001/ShowPatentsCount2022").then(
    (response) => {
      setPatentsCount2022(response.data[0].c);
    }
  );
};
getPatentsCount2022All();

const [patentsCount2021, setPatentsCount2021] =useState(0);
const getPatentsCount2021All = () => {
  Axios.get("http://localhost:3001/ShowPatentsCount2021").then(
    (response) => {
      setPatentsCount2021(response.data[0].c);
    }
  );
};
getPatentsCount2021All();
  
  return (
    <div>
      <div
        style={{
          margin: "0px",
          width: "200px",
          height: "1800px",
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
          <a style={{ color: "black", textDecoration: "none" }} href="/">
            Profile
          </a>
          <br />
          <br />
          <br />
          <a style={{ color: "black", textDecoration: "none" }} href="/">
            Dashboard
          </a>
          <br />
          <br />
          <br />

          <a style={{ color: "black", textDecoration: "none" }} href="/Patents">
            Patent
          </a>
          <br />
          <br />
          <br />
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/Citations"
          >
            Citations
          </a>
          <br />
          <br />
          <br />
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/ResearchPublicationCount"
          >
            Research Publication Count
          </a>
          <br />
          <br />
          <br />
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/TechnologyTransfer"
          >
            Technology Transfer
          </a>
          <br />
          <br />
          <br />
          <a style={{ color: "black", textDecoration: "none" }} href="/Journal">
            International Journal
          </a>
          <br />
          <br />
          <br />
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/SponsoredResearchProjects"
          >
            Sponsored Research Projects
          </a>
          <br />
          <br />
          <br />
          <a style={{ color: "black", textDecoration: "none" }} href="/Books">
            Books
          </a>
          <br />
          <br />
          <br />
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/Consultancy"
          >
            Consultancy
          </a>
          <br />
          <br />
          <br />
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/BookChapter"
          >
            Book Chapter
          </a>
          <br />
          <br />
          <br />
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/MoUsSigned"
          >
            MoUs Signed
          </a>
          <br />
          <br />
          <br />
          <a
            style={{ color: "black", textDecoration: "none" }}
            href="/Conference"
          >
            International Conference
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
            href="/Consolidated"
          >
            Consolidated
          </a>
          <br />
          <br />
          <br />

          <a style={{ color: "black", textDecoration: "none" }} href="./">
            Login
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="columnLeft">
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
                paddingLeft: "30px",
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
                CONSOLIDATED
              </h2>
              <div className="dropdown1">
                <label>Year : </label>
                <select
                  name="Author"
                  id="Author"
                  onChange={(event) => {
                    setYearFilterValue(event.target.value);
                  }}
                >
                  <option value="All" selected>
                    All
                  </option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div
                style={{
                  marginTop: "200px",
                  marginLeft: "0px",
                  marginRight: "250px",
                  width: "500px",
                }}
              >
                <table style={tableElements}>
                  {yearFilterValue === "All" ? (
                    <div>
                      <tr>
                        <th style={tableElements}>Item</th>
                        <th style={tableElements}>Count</th>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of International Journals in 2022
                        </td>
                        <td style={tableElements}>
                          {internationalJournalCount2022}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Book Chapters in 2022
                        </td>
                        <td style={tableElements}>
                          {bookChaptersCount2022}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Books in 2022
                        </td>
                        <td style={tableElements}>
                          {booksCount2022}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Patents Awarded in 2022
                        </td>
                        <td style={tableElements}>
                          {patentsCount2022}
                        </td>
                      </tr>
                      {/*
                      */}

                      <tr>
                        <td style={tableElements}>
                          No. of International Journals in 2021
                        </td>
                        <td style={tableElements}>
                          {internationalJournalCount2021}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Book Chapters in 2021
                        </td>
                        <td style={tableElements}>
                          {bookChaptersCount2021}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Books in 2021
                        </td>
                        <td style={tableElements}>
                          {booksCount2021}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Patents Awarded in 2021
                        </td>
                        <td style={tableElements}>
                          {patentsCount2021}
                        </td>
                      </tr>
                      {/*
                      */}

                      <tr>
                        <td style={tableElements}>
                          No. of Books in 2020
                        </td>
                        <td style={tableElements}>
                          {booksCount2020}
                        </td>
                      </tr>

                    </div>
                  ) : null}
                  {yearFilterValue === "2022" ? (
                    <div>
                      <tr>
                        <th style={tableElements}>Item</th>
                        <th style={tableElements}>Count</th>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of International Journals in 2022
                        </td>
                        <td style={tableElements}>
                          {internationalJournalCount2022}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Book Chapters in 2022
                        </td>
                        <td style={tableElements}>
                          {bookChaptersCount2022}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Books in 2022
                        </td>
                        <td style={tableElements}>
                          {booksCount2022}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Patents Awarded in 2022
                        </td>
                        <td style={tableElements}>
                          {patentsCount2022}
                        </td>
                      </tr>
                    </div>
                  ) : null}
                  {yearFilterValue === "2021" ? (
                    <div>
                      <tr>
                        <th style={tableElements}>Item</th>
                        <th style={tableElements}>Count</th>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of International Journals in 2021
                        </td>
                        <td style={tableElements}>
                          {internationalJournalCount2021}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Book Chapters in 2021
                        </td>
                        <td style={tableElements}>
                          {bookChaptersCount2021}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Books in 2021
                        </td>
                        <td style={tableElements}>
                          {booksCount2021}
                        </td>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Patents Awarded in 2021
                        </td>
                        <td style={tableElements}>
                          {patentsCount2021}
                        </td>
                      </tr>
                    </div>
                  ) : null}
                  {yearFilterValue === "2020" ? (
                    <div>
                      <tr>
                        <th style={tableElements}>Item</th>
                        <th style={tableElements}>Count</th>
                      </tr>
                      <tr>
                        <td style={tableElements}>
                          No. of Books in 2020
                        </td>
                        <td style={tableElements}>
                          {booksCount2020}
                        </td>
                      </tr>
                    </div>
                  ) : null}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consolidated;
