import React, { useState } from 'react'
import Input from './Input';

function RandomTask() {

    const [task, setTask] = useState('');
    const [num1, setNum1] = useState('0');
    const [num2, setNum2] = useState('0');


    const TaskCreator = () => {
        const num1 = Math.floor(Math.random() * 11);
        const num2 = Math.floor(Math.random() * 11);

        setNum1(num1);
        setNum2(num2);

        setTask(num1 + num2);

    }


    return (
        <div className='container d-flex flex-column align-items-center'>
            <button className='btn btn-info' onClick={TaskCreator}>Generate random task</button>
            <h2>Solve: {num1}+{num2}</h2>
            <Input task={task}/>
        </div>
    )
}

export default RandomTask
