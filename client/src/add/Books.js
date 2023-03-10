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

function Books() {
  const [bookList, setBookList] = useState([]);
  const getBooks = () => {
    Axios.get("http://localhost:3001/ShowBooks").then((response) => {
      // console.log(response);
      setBookList(response.data);
    });
  };  
  getBooks();
  //Search items
  const [searchItem, setSearchItem] = useState("");
  //Filters
  const [articleAuthorList, setArticleAuthorList] = useState([]);
  const [individualTempAuthorList, setIndividualTempAuthorList] = useState([]);
  const [authorFilterValue, setAuthorFilterValue] = useState("All");
  const getArticleAuthor = () => {
    Axios.get("http://localhost:3001/ShowArticleAuthors").then((response) => {
      // console.log(response);
      setArticleAuthorList(response.data);
    });
    // console.log(articleAuthorList);
    articleAuthorList.map((val) => {
      if (val.author.includes(",")) {
        var tempList = val.author.split(",");
        tempList.map((value) => {
          if (individualTempAuthorList.includes(value.trim()) === false) {
            individualTempAuthorList.push(value.trim());
          }
        });
      } else {
        if (individualTempAuthorList.includes(val.author) === false) {
          individualTempAuthorList.push(val.author);
        }
      }
    });
    console.log(individualTempAuthorList);
  };
  getArticleAuthor();

  const [articlePublisherList, setArticlePublisherList] = useState([]);
  const [publisherFilterValue, setPublisherFilterValue] = useState("All");
  const getArticlePublisher = () => {
    Axios.get("http://localhost:3001/ShowArticlePublishers").then(
      (response) => {
        // console.log(response);
        setArticlePublisherList(response.data);
      }
    );
  };
  getArticlePublisher();

  const [articleYearList, setArticleYearList] = useState([]);
  const [yearFilterValue, setYearFilterValue] = useState("All");
  const getArticleYear = () => {
    Axios.get("http://localhost:3001/ShowArticleYear").then((response) => {
      // console.log(response);
      setArticleYearList(response.data);
    });
  };
  getArticleYear();

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
            <a style={{ color: "black", textDecoration: "none" }} href="./">
              Dashboard
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="/Login">
              Login
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Journal"
            >
              Journal
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Conference"
            >
              Conference
            </a>
            <br />
            <br />
            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/Article"
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
              href="/Books"
            >
              Books
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
              <h2 style={{ opacity: "100%", fontSize: "30px" }}>Books</h2>
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
                <label>Author : </label>
                <select
                  name="Author"
                  id="Author"
                  onChange={(event) => {
                    setAuthorFilterValue(event.target.value);
                  }}
                >
                  <option value="All" selected>
                    All
                  </option>
                  {individualTempAuthorList.map((val, key) => {
                    return <option value={val}>{val}</option>;
                  })}
                </select>
              </div>
              <div className="dropdown2">
                <label>Publisher : </label>
                <select
                  name="Publisher"
                  id="Publisher"
                  onChange={(event) => {
                    setPublisherFilterValue(event.target.value);
                  }}
                >
                  <option value="All" selected>
                    All
                  </option>
                  {articlePublisherList.map((val, key) => {
                    return (
                      <option value={val.publisher}>{val.publisher}</option>
                    );
                  })}
                </select>
              </div>
              <div className="dropdown3">
                <label>Year : </label>
                <select
                  name="Year"
                  id="year"
                  onChange={(event) => {
                    setYearFilterValue(event.target.value);
                  }}
                >
                  <option value="All" selected>
                    All
                  </option>
                  {articleYearList.map((val, key) => {
                    return <option value={val.year}>{val.year}</option>;
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
                    <th style={tableElements}>S.No</th>
                    <th style={tableElements}>Emp Id</th>
                    <th style={tableElements}>Author Name</th>
                    <th style={tableElements}>Title</th>
                    <th style={tableElements}>ISBN</th>
                    <th style={tableElements}>Co-author</th>
                    <th style={tableElements}>Year</th>
                    <th style={tableElements}>Name of Publisher</th>
                  </tr>
                  {bookList
                    .filter((val) => {
                      if (searchItem === "") {
                        if (
                          authorFilterValue === "All" &&
                          publisherFilterValue === "All" &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          publisherFilterValue === val.publisher &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          publisherFilterValue === val.publisher &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          publisherFilterValue === "All" &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          publisherFilterValue === val.publisher &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          publisherFilterValue === "All" &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          publisherFilterValue === val.publisher &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          publisherFilterValue === "All" &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        }
                      } else if (
                        val.author
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.title
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.publisher
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                      ) {
                        if (
                          authorFilterValue === "All" &&
                          publisherFilterValue === "All" &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          publisherFilterValue === val.publisher &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          publisherFilterValue === val.publisher &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          publisherFilterValue === "All" &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          publisherFilterValue === val.publisher &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        } else if (
                          val.author.includes(authorFilterValue) &&
                          publisherFilterValue === "All" &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          publisherFilterValue === val.publisher &&
                          yearFilterValue === "All"
                        ) {
                          return val;
                        } else if (
                          authorFilterValue === "All" &&
                          publisherFilterValue === "All" &&
                          yearFilterValue === val.year.toString()
                        ) {
                          return val;
                        }
                      }
                    })
                    .map((val, key) => {
                      return (
                        <tr key={val.s_no}>
                          <td style={tableElements}>{val.s_no}</td>
                          <td style={tableElements}>{val.emp_id}</td>
                          <td style={tableElements}>{val.author_name}</td>
                          <td style={tableElements}>{val.title}</td>
                          <td style={tableElements}>{val.isbn}</td>
                          <td style={tableElements}>{val.co_author}</td>
                          <td style={tableElements}>{val.year}</td>
                          <td style={tableElements}>{val.name_of_pub}</td>
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

export default Books;
