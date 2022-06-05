import "./AddArticle.css";
import { useState } from "react";
import Axios from "axios";

function AddArticle() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [articleName, setArticleName] = useState("");
  const [year, setYear] = useState("");

  const [articleList, setarticleList] = useState([]);

  const displayInfo = () => {
    console.log(author + title + category + articleName + year);
  };

  const addJournal = () => {
    Axios.post("http://localhost:3001/create", {
      author: author,
      title: title,
      category: category,
      articleName: articleName,
      year: year,
    }).then(() => {
      console.log("success");
      setarticleList([
        ...articleList,
        {
          author: author,
          title: title,
          category: category,
          articleName: articleName,
          year: year,
        },
      ]);
    });
  };

  const getJournal = () => {
    Axios.get("http://localhost:3001/journals").then((response) => {
      console.log(response);
      setarticleList(response.data);
    });
  };

  return (
    <div>
      <div className="bg">
        <div>
          <h1 className="heading">RESEARCH INFORMATION SYSTEM</h1>
        </div>
        <hr
          style={{ width: "900px", textAlign: "left", marginLeft: "450px" }}
        />
        <div className="container">
          <hr className="line" style={{}} />
          <br />
          <div className="topnav">
            <a className="aa" href="#home">
              Dashboard
            </a>
            <br />
            <br />
            <br />
            <a className="aa" href="#news">
              Login
            </a>
            <br />
            <br />
            <br />
            <a className="aa" href="#contact">
              Journal
            </a>
            <br />
            <br />
            <br />
            <a className="aa" href="#about">
              Conference
            </a>
            <br />
            <br />
            <br />
            <a className="aa" href="#about">
              Article
            </a>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="text-block">
          <h2 style={{ opacity: "100%" }}>ADD DETAILS</h2>
          <div>
            <form>
              <div>
                <label>Author:</label>
                <input
                  type="text"
                  onChange={(event) => {
                    setAuthor(event.target.value);
                  }}
                  placeholder="Author Name"
                />
                <div>
                  Title:{""}
                  <input
                    type="text"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    placeholder="Title"
                  />
                </div>
                <div>
                  Category:{""}
                  <input
                    type="text"
                    onChange={(event) => {
                      setCategory(event.target.value);
                    }}
                    placeholder="Category"
                  />
                  &nbsp;
                </div>
                <div>
                  Article Name:{""}
                  <input
                    type="text"
                    onChange={(event) => {
                      setArticleName(event.target.value);
                    }}
                    placeholder="Name"
                  />
                  &nbsp;
                </div>
                <div>
                  Year :{""}
                  <input
                    type="text"
                    onChange={(event) => {
                      setYear(event.target.value);
                    }}
                    placeholder="Year"
                  />
                  &nbsp;
                </div>
              </div>
              <button type="submit" onClick={addJournal}>
                Submit
              </button>
              &nbsp;
              <button className="b1" type="submit">
                Cancel
              </button>
            </form>
            <div>
              <button className="show" type="submit" onClick={getJournal}>
                Show Table
              </button>
              <div class="tabletitle">
                <table>
                  <tr>
                    <th>S.No</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Article Name</th>
                    <th>Year</th>
                  </tr>
                  {articleList.map((val, key) => {
                    return (
                      <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.author}</td>
                        <td> {val.title}</td>
                        <td>{val.category}</td>
                        <td>{val.article_name}</td>
                        <td>{val.year}</td>
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

export default AddArticle;
