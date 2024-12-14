import React, { useState } from "react";
import "./signUp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { navLink } from "../../routers";
import { showAlert } from "../../components/alert/notify";

const SignUp = () => {
  const navigate = useNavigate()
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <FontAwesomeIcon onClick={() => navigate(navLink.login.nav)} className="back-button" icon={faChevronLeft}></FontAwesomeIcon>
        <h2>Create your account</h2>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="ex: jon smith" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="ex: jon.smith@email.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="********" />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm password</label>
          <input type="password" id="confirm-password" placeholder="********" />
        </div>
        <div className="terms">
          <input
            type="checkbox"
            id="terms"
            checked={acceptedTerms}
            onChange={handleCheckboxChange}
          />
          <label className="termLabel">
            <div>
              I understood the
            </div>
            <div className="termsUrl">terms & policy</div>
          </label>
        </div>
        <button
          // type="submit"
          className="signup-button"
          disabled={!acceptedTerms}
          onClick={() => {
            showAlert('Success')
            navigate(navLink.login.nav)
          }}
        >
          SIGN UP
        </button>
        <div className="or-section">or sign up with</div>
        <div className="social-buttons">
          <div className="logo-border">
            <FontAwesomeIcon className="google-icon" icon={faGoogle} />
          </div>
          <div className="logo-border">
            <FontAwesomeIcon className="facebook-icon" icon={faFacebook} />
          </div>
          <div className="logo-border">
            <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
          </div>
        </div>
        <div className="signin-link">
          Have an account? <div onClick={() => navigate(navLink.login.nav)}>SIGN IN</div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
