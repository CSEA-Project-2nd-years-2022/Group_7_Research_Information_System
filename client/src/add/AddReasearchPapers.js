import "./styles.css";

const tableElements = {
  border: "1px solid black",
  borderCollapse: "collapse",
  columnHeight: "300px",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingLeft: "5px",
  paddingRight: "5px",
};

function AddResearchPapers() {
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
          <br />
          <div style={{ paddingLeft: "40px", top: "270px", color: "black" }}>
            <a style={{ color: "black", textDecoration: "none" }} href="#home">
              Profile
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="#home">
              Dashboard
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="#home">
              Journal
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="#home">
              Conference
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="#home">
              Article
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="#home">
              Add Research Papers
            </a>
            <br />
            <br />
            <br />
            <a style={{ color: "black", textDecoration: "none" }} href="#home">
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
                ADD RESEARCH PAPERS
              </h2>
              <br />
              <br />
              <br />
              <div className="textBlock">
                <div className="box">
                  <div
                    style={{
                      borderRadius: "10px",
                      height: "50px",
                      width: "90px",
                      padding: "10px 10px 10px 30px",
                      border: "solid black",
                      backgroundColor: "#FFFACD",
                    }}
                  >
                    Journal
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                      height: "50px",
                      width: "90px",
                      padding: "10px 10px 10px 30px",
                      border: "solid black",
                      backgroundColor: "#FFE4B5",
                    }}
                  >
                    Conference
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                      height: "50px",
                      width: "90px",
                      padding: "10px 10px 10px 30px",
                      border: "solid black",
                      backgroundColor: "#FFC0CB",
                    }}
                  >
                    Article
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddResearchPapers;
