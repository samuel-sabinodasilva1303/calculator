import { useState } from "react";


const Calculator = () => {

    const [inputDisplay, setInputDisplay] = useState('');
    const [results, setResults] =  useState('');
    const [tokens, setTokens] = useState([]);

    const operationsTokens= [
        '+',
        '-'
    ];
    
    const handleTokenClick = (event) => {
        const token = event.target.value;

        const newTokens = [
            ...tokens, event.target.value
        ]
        setTokens(newTokens);

        
    }
    console.log(tokens);


    const calculeteResults = () => {
        
    };

    return (
        <div>
            <input type="number" value={inputDisplay} readOnly />
            <div>
                <button>AC</button>
                <button value="+" onClick={handleTokenClick}>+</button>
                <button value="0" onClick={handleTokenClick}>0</button>
                <button value="1" onClick={handleTokenClick}>1</button>
                <button value="2" onClick={handleTokenClick}>2</button>
                <button value="3" onClick={handleTokenClick}>3</button>
                <button value="4" onClick={handleTokenClick}>4</button>
                <button value="5" onClick={handleTokenClick}>5</button>
                <button value="6" onClick={handleTokenClick}>6</button>
                <button value="7" onClick={handleTokenClick}>7</button>
                <button value="8" onClick={handleTokenClick}>8</button>
                <button value="9" onClick={handleTokenClick}>9</button>
                <button value="=" onClick={handleTokenClick}>=</button>
            </div>
            <p>Resultado: </p>
        </div>
    )
}
export default Calculator;