import React, {useEffect, useState} from 'react';
import shuffleNumbers from "../helper";
import useQuizBuilder from "../commons";

export default function ChangeLevelButton(props) {

    const [state, setState] = props.state;
    const [changeToggle, setChangeToggle] = useState(false);
    const problemList = useQuizBuilder(state);

    let clickButton;

    const changeButtonHandler = (e) => {
        let a, b, c, d;
        a = parseInt(
            prompt(`A단부터 B단까지 C배수부터 D배수까지 연습 가능합니다. (A를 입력해주세요.)`));
        b = parseInt(
            prompt(`${a}단부터 B단까지 C배수부터 D배수까지 연습 가능합니다. (B를 입력해주세요.)`));
        c = parseInt(
            prompt(`${a}단부터 ${b}단까지 C배수부터 D배수까지 연습 가능합니다. (C를 입력해주세요.)`));
        d = parseInt(
            prompt(`${a}단부터 ${b}단까지 ${c}배수부터 D배수까지 연습 가능합니다. (D를 입력해주세요.)`));
        let isOk = prompt(`${a}단부터 ${b}단까지 ${c}배수에서 ${d}배수까지 연습합니다. 맞으면 Y 틀리면 N`) === 'Y' ? true : false;
        if (isOk) {
            setState(prevState => ({
                ...prevState,
                leftStart: a,
                leftEnd: b,
                rightStart: c,
                rightEnd: d,
                leftLength: b - a + 1,
                rightLength: d - c + 1
            }));
            setChangeToggle(!changeToggle);
        } else {
            alert('올바르지 않은 입력입니다. 버튼을 다시 눌러주세요.');
        }
    }

    return (
        <>
            <button ref={ref => clickButton = ref} onClick={changeButtonHandler}>단 변경</button>
        </>
    )
};