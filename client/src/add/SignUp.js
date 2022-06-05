import "./styles.css";

function SignUp() {
  return (
    <div>
      <div className="bg">
        <div className="containers">
          <div className="topnav2">
            <a href="Article.html">Article</a>
            <a href="conference.html">Conference</a>
            <a href="journal.html">Journal</a>
            <a href="login.html">Login</a>
            <a href="dashboard.html">Dashboard</a>
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
                // onClick="location.href='admin_dashboard.html'"
              >
                Sign up
              </button>
              <br />
              <br />

              <h4>
                <b>
                  Already have an account?
                  <a href="signup.html">Sign In</a>
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
