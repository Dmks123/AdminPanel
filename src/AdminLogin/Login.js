import React from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
export default function Login() {
  let history = useHistory();
  const logind = () => {
    history.push("/dash");
  };
  return (
    <div className="container">
      <div className="login ">
        {/* <h3 className="text-center text-white pt-5">Login form</h3> */}
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form className="form formlogin" action="" method="post">
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label for="username" className="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label for="password" className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label for="remember-me" className="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                    </label>
                    <br />
                    <input
                      type="submit"
                      onClick={logind}
                      name="Submit"
                      className="btn submit_btn"
                      value="Submit"
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <a href="#" className="text-info">
                      Register here
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">csc</div>
        <div className="col-6">dssdff</div>
      </div>
    </div>
  );
}
