import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import Popup from "./components/popup";

function Login() {
  const navigate = useNavigate();
  const navigateToAdminDashboard = () => {
    navigate("/Login/AdminDashboard");
  };

  const [emailStr, setEmailStr] = useState("");
  const [passwordStr, setPasswordStr] = useState("");

  const [loginList, setLoginList] = useState([]);
  const getLogins = () => {
    Axios.get("http://localhost:3001/ShowLoginDetails").then((response) => {
      // console.log(response);
      setLoginList(response.data);
    });
  };
  getLogins();

  const [emailList, setEmailList] = useState([]);
  const getEmails = () => {
    Axios.get("http://localhost:3001/ShowEmails").then((response) => {
      // console.log(response);
      setEmailList(response.data);
    });
  };
  getEmails();

  //Popup Component
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupString, setPopupString] = useState("");

  return (
    <div>
      <div className="bg">
        <div className="containers">
          <div className="topnav2">
            <a href="/Article">Article</a>
            <a href="/Conference">Conference</a>
            <a href="/Journal">Journal</a>
            <a
              style={{
                textDecoration: "underline",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              href="/Login"
            >
              Login
            </a>
            <a href="../">Dashboard</a>
          </div>
        </div>
        <div className="text-block1">
          <h2 style={{ opacity: "100%" }}>WELCOME BACK ADMIN</h2>
          <div>
            <form>
              <input
                type="text"
                placeholder="Email"
                onChange={(event) => {
                  setEmailStr(event.target.value);
                }}
              />
              <br />
              <br />
              <input
                type="Password"
                placeholder="Password"
                onChange={(event) => {
                  setPasswordStr(event.target.value);
                }}
              />
              <br />
              <a href="../">Forgot Password</a>
              <br />
              <br />
              <button
                className="loginbutton"
                type="button"
                onClick={
                  () => {
                    loginList
                      .filter((val) => {
                        if (val.email === emailStr) {
                          console.log("correct email");
                          return val;
                        }
                      })
                      .map((val, key) => {
                        key = val.s_no;
                        if (val.password !== passwordStr) {
                          // TO-DO : Password does not match
                          console.log("Password does not match ");
                          setPopupString("Incorrect Password");
                          setButtonPopup(true);
                        } else if (val.is_login === "no") {
                          // TO-DO : Did not admin access
                          setPopupString("Did not get Admin Access");
                          setButtonPopup(true);
                          console.log("Did not admin access");
                        } else {
                          return navigateToAdminDashboard();
                        }
                      });
                  }
                  //navigateToAdminDashboard
                }
              >
                Sign in
              </button>
              <br />
              <br />

              <h4>
                <b>
                  Don't have an account?
                  <a href="/Login/SignUp">Sign Up</a>
                </b>
              </h4>
            </form>
          </div>
        </div>
      </div>
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        popupStr={popupString}
      ></Popup>
    </div>
  );
}

export default Login;
