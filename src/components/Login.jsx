import React from 'react'
import profile from "/image.jpg";
import imagelogin from "/pexels.png";
import '../styles/Login.css'
import { Link } from 'react-router-dom';
function Login() {

    return (
      <div className="login">
        <div className="login-log-image">
          <div>
            <div className="profile1-login">
              <img src={profile} className="profile" />
              <div className="profile-login-para">
                <p className="profile-login-para1">Access Transport</p>
                <p className="profile-login-para2"> Company</p>
              </div>
            </div>
          </div>
          <div>
            <img src={imagelogin} alt="" className="loginimage" />
          </div>
          <div className="login-log-image-paragraph">
            {" "}
            <p>Find And Book The Best</p>
            <div className="login-log-image-paragraph1">
              <p className="login-logo-image-paragraph-car">Cars</p>
              <p>Easily</p>
            </div>
          </div>
        </div>

        <div className="login-container">
          <div className="login-container-paragraph1">
            <div className="login-container-paragraph">
              <p className="login-container-paragraph12">Welcome to Access</p>
              <p>Transport</p>
            </div>
            <p>Company</p>
          </div>

          <div className="login-button-paragraph">
            <div className="login-register">
              <button className="login-register-login">Login</button>
              <button className="login-register-register">Register</button>
            </div>
            <p>Enter your details to get access</p>
          </div>

          <form className="loginform">
            <div className="login-email-password">
              <input
                type="email"
                placeholder="Email"
                className="form-login-input"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="form-login-input"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-login-checkbox">
              <div className="login-rember">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  // checked={rememberMe}
                  // onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember Me</label>
              </div>

              <Link href="#" className="forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login