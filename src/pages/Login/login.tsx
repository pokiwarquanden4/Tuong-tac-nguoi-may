import React, { useState } from "react";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { showAlert } from "../../components/alert/notify";
import { useNavigate } from "react-router-dom";
import { navLink } from "../../routers";


const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const username = "admin@gmail.com";
    const userPassword = "123456789";

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Check if email and password match
        if (email === username && password === userPassword) {
            showAlert('Login success', 'success')
            // Redirect to another page or perform desired actions
            navigate(navLink.homePage.nav)
        } else {
            showAlert('Wrong email or password', 'danger')
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <div className="logo">
                    <span>S</span>
                </div>
                <h2>Sign in your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="ex: jon.smith@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="signin-button">
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
                    Don’t have an account? <div onClick={() => navigate(navLink.signup.nav)}>SIGN UP</div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

