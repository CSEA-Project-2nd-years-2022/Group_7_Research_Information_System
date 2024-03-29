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

function Patents() {
  const [patentList, setPatentList] = useState([]);
  const getPatents = () => {
    Axios.get("http://localhost:3001/ShowPatents").then((response) => {
      // console.log(response);
      setPatentList(response.data);
    });
  };
  getPatents();
  //Search items
  const [searchItem, setSearchItem] = useState("");
  //Filters

  const [patentNoList, setPatentNoList] = useState([]);
  const [patentNoFilterValue, setPatentNoFilterValue] = useState("All");
  const getpatentNo = () => {
    Axios.get("http://localhost:3001/ShowPatentNos").then((response) => {
      console.log(patentNoList);
      setPatentNoList(response.data);
    });
  };
  getpatentNo();

  return (
    <div>
      <div className="columnLeft">
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
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
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
              style={{ color: "black", textDecoration: "none" }}
              href="/TechnologyTransfer"
            >
              Technology Transfer
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
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
              <h2 style={{ opacity: "100%", fontSize: "30px" }}>PATENTS</h2>
              <form>
                <div>
                  <input
                    style={{ width: "600px", borderRadius: "14px" }}
                    type="text"
                    placeholder="Type to search"
                    onChange={(event) => {
                      setSearchItem(event.target.value);
                      console.log(event.target.value);
                    }}
                  />
                </div>
              </form>
              <div className="dropdown1">
                <label>Patent No : </label>
                <select
                  name="Author"
                  id="Author"
                  onChange={(event) => {
                    setPatentNoFilterValue(event.target.value);
                    console.log(patentNoFilterValue);
                  }}
                >
                  <option value="All" selected>
                    All
                  </option>
                  {patentNoList.map((val, key) => {
                    
                    if(val.patent_number==null){
                      return;
                    }
                    console.log(val.patent_number);
                    key = val.patent_number;
                    return <option value={val.patent_number}>{val.patent_number}</option>;
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
                    <th style={tableElements}>Author Name</th>
                    <th style={tableElements}>No. of patents filed</th>
                    <th style={tableElements}>No. of patents granted</th>
                    <th style={tableElements}>No. of patents licensed</th>
                    <th style={tableElements}>Patent No.</th>
                    <th style={tableElements}>Date</th>
                    <th style={tableElements}>Title</th>
                  </tr>
                  {patentList
                    .filter((val) => {
                      if (searchItem === "" 
                         ||val.emp_name
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                         || (val.patent_title!=null && val.patent_title
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                          )) {
                        if (patentNoFilterValue === "All") {
                          return val;
                        } else if (patentNoFilterValue === val.patent_number) {
                          return val;
                        }
                      }
                    })
                    .map((val, key) => {
                      return (
                        <tr key={val.emp_id}>
                          <td style={tableElements}>{val.emp_id}</td>
                          <td style={tableElements}>{val.emp_name}</td>
                          <td style={tableElements}>{val.num_patent}</td>
                          <td style={tableElements}>
                            {val.num_patent_granted}
                          </td>
                          <td style={tableElements}>
                            {val.num_patent_liscenced}
                          </td>
                          <td style={tableElements}>{val.patent_number}</td>
                          <td style={tableElements}>{val.date_award}</td>
                          <td style={tableElements}>{val.patent_title}</td>
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

export default Patents;
