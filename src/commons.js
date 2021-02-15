import {useState} from 'react';
import shuffleNumbers from "./helper";

export default function useQuizBuilder(quizState) {
    const [state, setState] = useState(quizState);
    let list = [];
    let idIdx = 0;
    const idList = shuffleNumbers(state.leftLength * state.rightLength);
    for (let i = state.leftStart; i <= state.leftEnd; i++) {
        for (let j = state.rightStart; j <= state.rightEnd; j++) {
            const quiz = {
                id: idList[idIdx],
                left: i,
                right: j,
                answer: i * j,
                userInput: null,
                isRightAnswer: false,
            };
            list.push(quiz);
            idIdx++;
        }
    }
    return list;
}