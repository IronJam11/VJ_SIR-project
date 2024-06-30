import React, { useState } from "react";
import { useNavigate, NavLink} from "react-router-dom";
// import axios from "axios";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import Cookies from "js-cookie";


export default function OTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "otp" && !/^\d*$/.test(value)) return; 
    if (name === "otp") setOtp(value);
  };

  const handleSubmit = async (event) => {
     console.log("OTP verification initiated with OTP:", otp);
    event.preventDefault();
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/user/verify-otp/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp }),
      credentials: "include",
    });

    console.log("Response from backend:", response);
    if (response.status === 200 || response.status === 201) {

      const { access, refresh, msg } = response.data;
      console.log(msg);
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

       Cookies.set("session_id", access, { expires: 7 });

      console.log("OTP verified successfully. Tokens stored in localStorage.");
      navigate("/login");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  } catch (error) {
    console.error("Failed to verify OTP:", error);
    if (error.response && error.response.data) {
      console.error("Error response data:", error.response.data);
    }
    alert("Failed to verify OTP. Please try again later.");
  }
  };

  return (
    <section id="LogIn">
      <div className="login-left">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <h2>
          Start Your <span>Perfect</span>
          <br />
          Preparation Today
        </h2>
        <div className="login-bottom">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="input"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleChange}
              required
            />

            <button className="login-btn" type="submit">
              Confirm
            </button>
          </form>
          <div className="otp-link">
            <a href="/Signup">Change E-mail</a>
            <div className="otp-line"></div>
            <a href="/">Request New Code</a>
          </div>
        </div>
      </div>
      <div className="login-right">
        <img src={vjsir} alt="vjsir" />
      </div>
    </section>
  );
}