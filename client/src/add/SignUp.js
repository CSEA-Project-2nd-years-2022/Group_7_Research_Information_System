import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import Popup from "./components/popup";

function SignUp() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/Login");
  };

  const [emailStr, setEmailStr] = useState("");
  const [passwordStr, setPasswordStr] = useState("");
  const [confirmPasswordStr, setConfirmPasswordStr] = useState("");

  const [emailList, setEmailList] = useState([]);
  const getEmails = () => {
    Axios.get("http://localhost:3001/ShowEmails").then((response) => {
      // console.log(response);
      setEmailList(response.data);
    });
  };
  getEmails();

  const addLogin = () => {
    Axios.post("http://localhost:3001/AddLogin", {
      email: emailStr,
      password: passwordStr,
      is_login: "no",
    }).then(() => {
      // console.log("success");
    });
  };
  //Popup Component
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupString, setPopupString] = useState("");

  //Unique email
  const [uniqueEmailList, setUniqueEmailList] = useState([]);
  const getUniqueEmails = () => {
    emailList.map((val) => {
      if (uniqueEmailList.includes(val.email) === false) {
        uniqueEmailList.push(val.email);
      }
    });
    // console.log(uniqueEmailList);
  };
  getUniqueEmails();

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
              <br />
              <input
                type="Password"
                placeholder="Confirm Password"
                onChange={(event) => {
                  setConfirmPasswordStr(event.target.value);
                }}
              />
              <br />
              <br />
              <button
                className="loginbutton"
                type="button"
                onClick={() => {
                  emailList
                    .filter((val) => {
                      if (emailStr.includes("@psgtech.ac.in") === false) {
                        setPopupString("Enter a valid PSG TECH email address");
                        setButtonPopup(true);
                        //TO-DO : Enter a valid email address
                      } else if (val.email === emailStr) {
                        console.log("email is registered");
                        setPopupString("Your email is already registered");
                        setButtonPopup(true);
                        //navigateToLogin();
                      } else if (passwordStr === "") {
                        setPopupString("Enter the Password");
                        setButtonPopup(true);
                        //TO-Do : Enter Password
                      } else if (passwordStr !== confirmPasswordStr) {
                        setPopupString(
                          "Password and Confirm Password does not match"
                        );
                        setButtonPopup(true);
                        //TO-Do : Password and Confirm Password does not match
                      } else if(uniqueEmailList.includes(emailStr) === false){
                        console.log("create a new");
                        uniqueEmailList.push(emailStr);
                        return val;

                      }
                      else {
                        //unwanted else
                      }
                    })
                    .map((value) => {
                      console.log("added login");
                      addLogin();
                      navigateToLogin();
                    });
                }}
              >
                Sign up
              </button>
              <br />
              <br />

              <h4>
                <b>
                  Already have an account?
                  <a href="./">Sign In</a>
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

export default SignUp;
