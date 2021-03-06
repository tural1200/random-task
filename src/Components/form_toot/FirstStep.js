import React, { useState } from "react";
import email_icon from "./img/email.svg";

function FirstStep({ step, setStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (property) => {
    if (firstName !== "" && lastName !== "" && email !== "" && isEmail(email)) {
      setStep(property);
    }
  };

  const handleName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  function isEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEmail.test(val)) {
      return true;
    } else {
      return false;
    }
  }
  const nextStep = () => {
    if (firstName !== "" && lastName !== "" && email !== "" && isEmail(email)) {
      setStep(step + 1);
    }
  };

  return (
    <div className={step === 1 ? "first_step active" : "first_step"}>
      <section className="section_1">
        <div className="steps">
          <button
            onClick={() => handleClick(1)}
            className={step === 1 ? "step step_1 active" : "step step_1"}
          ></button>
          <button
            onClick={() => handleClick(2)}
            className={step === 2 ? "step step_2 active" : "step step_2"}
          ></button>
          <button
            onClick={() => handleClick(3)}
            className={step === 3 ? "step step_3 active" : "step step_3"}
          ></button>
        </div>
        <div className="middle">
          <h6>Sign Up</h6>
        </div>
        <div className="exit">
          <button className="exit_btn"></button>
        </div>
      </section>
      <section className="section_2">
        <label>Your First Name</label>
        <input onChange={handleName} value={firstName} type="text" />
      </section>
      <section className="section_3">
        <label>Your Last Name</label>
        <input onChange={handleLastName} value={lastName} type="text" />
      </section>
      <section className="section_4">
        <label>Email</label>
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          placeholder="info@qscepter.com"
        />
        <img src={email_icon} />
      </section>
      <section className="section_5">
        <button onClick={nextStep} className="next_btn">
          Next
        </button>
      </section>
      <section className="section_6">
        <label>or continue with</label>
        <div className="social_networks">
          <a href="#" className="social_networks_btn">
            <span className="linkedin_logo"></span>
          </a>
          <a href="#" className="social_networks_btn">
            <span className="facebook_logo"></span>
          </a>
          <a href="#" className="social_networks_btn">
            <span className="google_logo"></span>
          </a>
          <a href="#" className="social_networks_btn">
            <span className="twitter_logo"></span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default FirstStep;
