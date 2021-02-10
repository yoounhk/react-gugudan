import {React, useState, useRef} from 'react';
import './App.css';

function genRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function App() {

    const [userInput, setUserInput] = useState(null);
    const [leftSeed, setLeftSeed] = useState(9);
    const [rightSeed, setRightSeed] = useState(9);
    const [left, setLeft] = useState(genRand(2, leftSeed));
    const [right, setRight] = useState(genRand(1, rightSeed));
    const [outputString, setOutputString] = useState('');
    const [history, setHistory] = useState([]);
    const [winCount, setWinCount] = useState(0);

    const inputEl = useRef();

    const changeDanButtonHandler = (e) => {
        const leftSeed = parseInt(
            prompt('몇단까지?(2보다 큰 자연수)', 9));
        const rightSeed = parseInt(
            prompt(`${leftSeed}단에서 최대 몇배수까지?(9 이상의 자연수)`, 9));
        alert(`다음 문제부터 적용됩니다. (${leftSeed}*${rightSeed}단)`);
        setLeftSeed(leftSeed);
        setRightSeed(rightSeed);
    }

    const changeHandler = (e) => {
        setUserInput(parseInt(e.target.value));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const answer = left * right;
        if (answer === userInput) {
            setOutputString(`정답입니다!`);
            setWinCount(winCount + 1);
            console.log(winCount);
        } else {
            setOutputString(`틀렸습니다.`);
        }
        setHistory(prevState => [...prevState, {
            left: left,
            right: right,
            answer: answer,
            userInput: userInput
        }]);
        inputEl.current.value = null;
        setLeft(genRand(2, leftSeed));
        setRight(genRand(1, rightSeed));
        inputEl.current.focus();
    }

    const renderHistory = () =>
        history.map((e, index) => {
            return (
                <>
                    <li key={index}>
                        {`Q${index + 1}: ${e.left} * ${e.right} = ${e.answer} `}
                        <br/>
                        {`제출: ${e.userInput} 결과: ` + (e.answer === e.userInput ? '정답' : '오답')}
                    </li>
                </>
            );
        });

    return (
        <>
            <div className="App-header">
                <div className="output">{outputString}</div>
                <div className="question">{left} * {right} = ?</div>
                <div>출제범위: {leftSeed}*{rightSeed}단</div>
                <button onClick={changeDanButtonHandler}>단 바꾸기</button>
                <form className="input-form" onSubmit={submitHandler}>
                    <input ref={inputEl} type="text" onChange={changeHandler}/>
                    <button type="submit">제출</button>
                </form>
                <div>{`정답 횟수: ${winCount}`}</div>
                <div>History</div>
                <div>
                    {renderHistory()}
                </div>
            </div>
        </>
    );
}
