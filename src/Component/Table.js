import React, {useEffect, useState} from 'react';
import './Table.css'

export default function Table(props) {

    const [state, setState] = props.state;
    const [problemList, setProblemList] = props.problemList;

    const tableHeader = [...Array(state.rightLength).keys()].map((e) => {
        return (
            <>
                <th>{e + state.rightStart}</th>
            </>
        );
    });

    const tableCell = (i) =>
        problemList.slice((state.rightLength * i), (state.rightLength * i) + state.rightLength).map((e) =>
            <td style={{color: '#98ff98'}}
                id={e.id}
                className={e.render}>
                {e.left} * {e.right} = {e.answer}
            </td>);

    const tableRow = [...Array(state.leftLength).keys()].map((e) => {
        return (
            <tr>
                <td>{e + state.leftStart}</td>
                {tableCell(e)}
            </tr>
        );
    });

    return (
        <>
            <table>
                <tr>
                    <th>X</th>
                    {tableHeader}
                </tr>
                {tableRow}
            </table>
        </>
    );
}