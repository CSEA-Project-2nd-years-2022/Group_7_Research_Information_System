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

function TechnologyTransfer() {
  const [techList, setTechList] = useState([]);
  const getTechTransfer = () => {
    Axios.get("http://localhost:3001/ShowTechnologyTransfer").then(
      (response) => {
        // console.log(response);
        setTechList(response.data);
      }
    );
  };
  getTechTransfer();
  //Search items
  const [searchItem, setSearchItem] = useState("");
  //Filters
  const [indAllList, setIndAllList] = useState([]);
  const [indAllFilterValue, setIndAllFilterValue] = useState("All");
  const getIndAll = () => {
    Axios.get("http://localhost:3001/ShowIndustryAlliance").then((response) => {
      setIndAllList(response.data);
    });
  };
  getIndAll();

  return (
    <div>
      <div className="columnLeft">
        {" "}
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

            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Patents"
            >
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
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              href="/TechnologyTransfer"
            >
              Technology Transfer
            </a>
            <br />
            <br />
            <br />
            <a
              style={{
                color: "black",
                textDecoration: "none",
              }}
              href="/Journal"
            >
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
              style={{ color: "black", textDecoration: "none" }}
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
                Technology Transfer
              </h2>
              <form>
                <div>
                  <input
                    style={{ width: "600px", borderRadius: "14px" }}
                    type="text"
                    placeholder="Type to search"
                    onChange={(event) => {
                      setSearchItem(event.target.value);
                    }}
                  />
                </div>
              </form>
              <div className="dropdown1">
                <label>Industry Alliance : </label>
                <select
                  name="Author"
                  id="Author"
                  onChange={(event) => {
                    setIndAllFilterValue(event.target.value);
                  }}
                >
                  <option value="All" selected>
                    All
                  </option>
                  {indAllList.map((val, key) => {
                    if (val.industry_alliance == null) {
                      return;
                    }
                    return (
                      <option value={val.industry_alliance}>
                        {val.industry_alliance}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div
                style={{
                  marginTop: "100px",
                  marginLeft: "0px",
                  marginRight: "250px",
                  width: "500px",
                }}
              >
                <table style={tableElements}>
                  <tr>
                    <th style={tableElements}>Emp Id</th>
                    <th style={tableElements}>Emp Name</th>
                    <th style={tableElements}>No. of Tech. Trans. done</th>
                    <th style={tableElements}>Title</th>
                    <th style={tableElements}>Industry Alliance</th>
                    <th style={tableElements}>No. People Involved</th>
                  </tr>
                  {techList
                    .filter((val) => {
                      if (
                        searchItem === "" ||
                        val.emp_name
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        (val.title_tech_tran != null &&
                          val.title_tech_tran
                            .toLowerCase()
                            .includes(searchItem.toLowerCase()))
                      ) {
                        if (indAllFilterValue === "All") {
                          return val;
                        } else if (
                          indAllFilterValue === val.industry_alliance
                        ) {
                          return val;
                        }
                      }
                    })
                    .map((val) => {
                      return (
                        <tr key={val.emp_id}>
                          <td style={tableElements}>{val.emp_id}</td>
                          <td style={tableElements}>{val.emp_name}</td>
                          <td style={tableElements}>{val.num_tech_tran}</td>
                          <td style={tableElements}>{val.title_tech_tran}</td>
                          <td style={tableElements}>{val.industry_alliance}</td>
                          <td style={tableElements}>
                            {val.num_people_inloved}
                          </td>
                        </tr>
                      );
                    })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyTransfer;
