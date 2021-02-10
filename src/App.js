import {React, useState, useRef} from 'react';
import './App.css';

function genRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function App() {

    const [userInput, setUserInput] = useState(null);
    const [left, setLeft] = useState(genRand(2, 9));
    const [right, setRight] = useState(genRand(1, 9));
    const [outputString, setOutputString] = useState('');

    const inputEl = useRef();


    const changeHandler = (e) => {
        setUserInput(parseInt(e.target.value));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const answer = left * right;
        if (answer === userInput) {
            setOutputString(`정답입니다!`);
        } else {
            setOutputString(`제출: ${userInput}, 정답: ${answer}\n
            틀렸습니다.`);
        }
        inputEl.current.value = null;
        setLeft(genRand(2, 9));
        setRight(genRand(1, 9));
        inputEl.current.focus();
    }

    return (
        <div className="App-header">
            <div className="question">{left} * {right} = ?</div>
            <div className="break"></div>
            <form className="input-form" onSubmit={submitHandler}>
                <input ref={inputEl} type="text" onChange={changeHandler}/>
                <button type="submit">제출</button>
            </form>
            <div className="break"></div>
            <div className="output">{outputString}</div>
        </div>
    );
}
