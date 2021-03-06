import React from 'react'

function ThirdStep({step, setStep}) {
    return (
        <div className={step === 3 ? "third_step active" : "third_step"}>
      <section className="section_1">
        <div className="steps">
          <button
            onClick={() => setStep(1)}
            className={step === 1 ? "step step_1 active" : "step step_1"}
          ></button>
          <button
            onClick={() => setStep(2)}
            className={step === 2 ? "step step_2 active" : "step step_2"}
          ></button>
          <button
            onClick={() => setStep(3)}
            className={step === 3 ? "step step_3 active" : "step step_3"}
          ></button>
        </div>
        <div className="middle">
          <h6>Select Interests</h6>
        </div>
        <div className="exit">
          <button className="exit_btn"></button>
        </div>
      </section>
      <section className="section_2">
      <label>We’ll make sure that you see the best streams on these topics</label>
      </section>
        </div>
    )
}

export default ThirdStep
