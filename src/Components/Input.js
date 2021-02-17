import React, { useState } from "react";
import Players from "./Players";

function Input({task}) {
  const [inputState, setInputState] = useState('');

  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);

  const handleChange = (e) => {
    setInputState(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if(task == inputState) {
        setPlayer1(initialValue => initialValue + 1)
      } else {
        setPlayer2(initialValue => initialValue+1)
      }
      


      setInputState('');
  }

  return (
    <div>
              
      <form onSubmit={handleSubmit}>
        <input value={inputState} onChange={handleChange} />
        <button className='btn btn-primary'>Send answer</button>
      </form>
      <Players player1 = {player1} player2 = {player2}/>
    </div>
  );
}

export default Input;
