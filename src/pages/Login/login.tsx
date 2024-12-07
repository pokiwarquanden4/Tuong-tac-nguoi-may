import React from "react";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
    return (
        <div className="signin-container">
            <div className="signin-box">
                <div className="logo">
                    <span>S</span>
                </div>
                <h2>Sign in your account</h2>
                <form>
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
                    <button type="submit" className="signin-button">
                        SIGN IN
                    </button>
                </form>
                <div className="or-section">or sign in with</div>
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
                <div className="signup-link">
                    Don’t have an account? <a href="/signup">SIGN UP</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
