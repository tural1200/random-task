import React, { useState } from "react";
import username_logo from "./img/username.svg";
import pass_logo from "./img/password.svg";
import wrong_icon from "./img/wrong_icon.svg";
import correct_icon from "./img/correct_icon.svg";

function SecondStep({ step, setStep }) {
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleClick = (property) => {
    if (
      username !== "" &&
      pass !== "" &&
      confirmPass !== "" &&
      pass == confirmPass
    ) {
      setStep(property);
    }
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  const nextStep = () => {
    if (
      username !== "" &&
      username.length >=8 &&
      pass !== "" &&
      confirmPass !== "" &&
      pass == confirmPass
    ) {
      setStep(step + 1);
    }
  };

  return (
    <div className={step === 2 ? "second_step active" : "second_step"}>
      <section className="section_1">
        <div className="steps">
          <button
            onClick={() => setStep(1)}
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
        <label>Username</label>
        <input onChange={handleUserName} value={username} type="text" />
        <img className="left_icon" src={username_logo} alt="" />
        <img
          className={
            username.length < 8
              ? "right_icon_correct"
              : "right_icon_correct active"
          }
          src={correct_icon}
          alt=""
        />
      </section>
      <section className="section_3">
        <label>Password</label>
        <input onChange={handlePass} value={pass} type="password" />
        <img className="left_icon" src={pass_logo} alt="" />
      </section>
      <section className="section_4">
        <label>Confirm Password</label>
        <input
          onChange={handleConfirmPass}
          value={confirmPass}
          type="password"
        />
        <img className="left_icon" src={pass_logo} alt="" />
        <img
          className={
            pass === confirmPass
              ? "right_icon_wrong"
              : "right_icon_wrong active"
          }
          src={wrong_icon}
          alt=""
        />
        <img
          className={
            pass === confirmPass && pass !== ""
              ? "right_icon_correct active"
              : "right_icon_correct"
          }
          src={correct_icon}
          alt=""
        />
      </section>
      <section className="section_5">
        <button onClick={nextStep} className="next_btn">
          Next
        </button>
      </section>
    </div>
  );
}

export default SecondStep;
