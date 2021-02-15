import React, {useEffect, useState} from 'react';
import Table from "./Table";
import ChangeLevelButton from "./ChangeLevelButton";
import Game from "./Game";

export default function GameController() { // TODO: state가 잘 전달되지 않고 있음
    const [problemList, setProblemList] = useState([]);
    const [state, setState] = useState({
        leftStart: 2,
        leftEnd: 9,
        leftLength: 8,
        rightStart: 1,
        rightEnd: 9,
        rightLength: 9,
        isEnd: false,
        currentQuiz: {}
    });
    const [history, setHistory] = useState([]);
    const [isStart, setIsStart] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState({});

    function GameBoard() {
        if (isStart) {
            return (
                <>
                    <Table state={[state, setState]}
                           problemList={[problemList, setProblemList]}
                    />
                    <ChangeLevelButton
                        state={[state, setState]}
                        problemList={[problemList, setProblemList]}/>
                    <Game
                        state={[state, setState]}
                        problemList={[problemList, setProblemList]}
                        currentQuiz={[currentQuiz, setCurrentQuiz]}/>
                </>
            );
        } else {
            return (
                <>
                    <div style={{color: 'red'}}>Select level and press the start button</div>
                    <ChangeLevelButton
                        state={[state, setState]}
                        problemList={[problemList, setProblemList]}/>
                    <button
                        id="start"
                        onClick={(e) => setIsStart(true)}>Start
                    </button>
                </>
            );
        }
    }

    return (<GameBoard/>);

};