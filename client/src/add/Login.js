import "./styles.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const navigateToAdminDashboard = () => {
    navigate("/Login/AdminDashboard");
  };
  return (
    <div>
      <div className="bg">
        <div className="containers">
          <div className="topnav2">
            <a href="/Article">Article</a>
            <a href="/Conference">Conference</a>
            <a href="/Journal">Journal</a>
            <a style={{textDecoration: "underline",fontSize:"20px",fontWeight: "bold"}} href="/Login">Login</a>
            <a href="../">Dashboard</a>
          </div>
        </div>
        <div className="text-block1">
          <h2 style={{ opacity: "100%" }}>WELCOME BACK ADMIN</h2>
          <div>
            <form>
              <input type="text" placeholder="Email" />
              <br />
              <br />
              <input type="Password" placeholder="Password" />
              <br />
              <a href="../">Forgot Password</a>
              <br />
              <br />
              <button 
                className="loginbutton"
                type="button"
                onClick={navigateToAdminDashboard}
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
    </div>
  );
}

export default Login;
