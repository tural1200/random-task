import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

function Form() {
  const [step, setStep] = useState(1);

  return (
    <div className="form">
      <div className="form_container">
        <FirstStep step={step} setStep={setStep} />
        <SecondStep step={step} setStep={setStep} />
        <ThirdStep step={step} setStep={setStep} />
      </div>
    </div>
  );
}

export default Form;
