import React, { useState} from "react"; 
import {calculatorWinner} from "../helper"; 
import Board from "./Board"; 

const Game =  () => {
    const [history, setHistory] = useState ([Array(9)\.fill(null)]);
    const [stepNumber, setStepNumber] = usState(0);
    const [xIsNext, setXisNext] = useState(true); 
    const winner = calculateWinner(history[stepNumber]);
    const x0 = xIsNext ? "X": "O"}; 

    const handleClick = (i) => {
       const historyPoint = history.slice(0, stepNumber +1); 
        const current = historyPoint[stepNumber];
        const squares = [...current]; 
        //return if won or occupied
        if (winner || squares[i] ) return; 
   // select square 
        squares[i] = xO;
        setHistory([...historyPoint, squares]); 
        setStepNumber(history.Point.length);
        setXisNext(!xIsNext);
   
    }; 

    const jumpTo = (move) =>  {
        setStepNumber (step); 
        setXIsNext(step%2=>0)
    };
    function renderMoves() {
    return;
}
     {   history.map((_step, move)) => 
            const destination = move ? 'Go to move #${move}' : "Go to Start"
        };
    return (
        <><li key={move}>
            <button onClick={() => jumpTo(move)}>{destination} </button>

        </li>
        );
        );
                <h1> React Tic Tac Toe - with Hooks</h1>
                <Board squares={history[stepNumber]} onClick={handleClick} />
                <div className="info-wrapper">
                    <div>
                        <h3>History</h3>
                        {renderMoves()}
                    </div>
                    <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
                </div>
            </>  
    );