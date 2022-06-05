import "./styles.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/Login");
  };

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
              <input type="text" placeholder="Email" />
              <br />
              <br />
              <input type="Password" placeholder="Password" />
              <br />
              <br />
              <input type="Password" placeholder="Confirm Password" />
              <br />
              <br />
              <button
                className="loginbutton"
                type="button"
                onClick={navigateToLogin}
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
    </div>
  );
}

export default SignUp;
