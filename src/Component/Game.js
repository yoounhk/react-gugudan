import {React, useEffect, useRef, useState} from 'react';
import './Game.css';
import shuffleId, {genRand} from "../helper";
import shuffleNumbers from "../helper";

export default function Game(props) {

    const [state, setState] = props.state;
    const [problemList, setProblemList] = props.problemList;
    const [currentQuiz, setCurrentQuiz] = props.currentQuiz;
    const [outputString, setOutputString] = useState('');

    const inputEl = useRef(null);

    let userAnswer;

    const submitHandler = (e) => {
        e.preventDefault();
        if (currentQuiz.id === problemList.length-1) {
            alert('You win');
            setState(prevState => prevState.isEnd = true);
            return;
        }
        if (inputEl.current) {
            inputEl.current.focus();
        }
        setCurrentQuiz(prevState => {
            const userInput = parseInt(inputEl.current.value);
            if (prevState.answer === userInput) {
                prevState.isRightAnswer = true;
            }
            prevState.userInput = userInput;
            return problemList.find(x => x.id === (prevState.id + 1))
        });
        console.log('submit 핸들러 실행됨'); // 자기 자신을 이용해서 바꾸기
    }

    // const renderHistory = Object.values(history).map((e, i) => {
    //     console.log(history);
    //     return (
    //         <>
    //             <li id={i + 1}>
    //                 {`Q${i + 1}: ${e.problemObject.left} * ${e.problemObject.right} = ${e.rightAnswer} `}
    //                 <br/>
    //                 {`제출: ${e.userAnswer} 실답: ${e.rightAnswer} 결과: `
    //                 + (e.isRight ? '정답' : '오답')}
    //             </li>
    //         </>
    //     );
    // });

    return (
        <>
            <div className="App-header">
                <div className="output">{outputString}</div>
                <div>출제범위: {state.leftStart}~{state.leftEnd}단의
                    {state.rightStart}~{state.rightEnd}배수까지
                </div>
                <div className="question">
                    {currentQuiz.left} * {currentQuiz.right} = ?
                </div>
                <form className="input-form" onSubmit={submitHandler}>
                    <input ref={inputEl}
                           type="text"
                           value={userAnswer}
                           onChange={e => userAnswer = parseInt(e.target.value)}/>
                    <input type="submit" value="제출"></input>
                </form>
                <div>{`정답 횟수: ${problemList.filter(x => x.isRightAnswer === true).length}`}</div>
                <div>History</div>
                <div>
                    <ul>
                        {/*{renderHistory}*/}
                    </ul>
                </div>
            </div>
        </>
    );
}
