import { useState } from "react";

const Calculator = () => {
  const [inputDisplay, setInputDisplay] = useState("");
  const [results, setResults] = useState("");
  const [tokens, setTokens] = useState([]);

  const operationsTokens = ["+", "-"];

  const handleTokenClick = (event) => {
    const token = event.target.value;

    const lastToken = tokens[tokens.length - 1];

    if (tokens.length === 0) {
      appendToken(token);

      return;
    }

    if (!isOperationToken(lastToken) && !isOperationToken(token)) {
      const newValueToken = `${lastToken}${token}`;

      const newTokens = [...tokens];
      newTokens[tokens.length - 1] = newValueToken;
      setTokens(newTokens);

      return;
    }

    if (!isOperationToken(lastToken) && isOperationToken(token)) {
      appendToken(token);

      return;
    }

    if (isOperationToken(lastToken) && !isOperationToken(token)) {
      appendToken(token);

      return;
    }
  };

  function appendToken(token) {
    const newTokens = [...tokens, token];
    setTokens(newTokens);
  }

  function isOperationToken(token) {
    return operationsTokens.includes(token);
  }

  const calculeteResults = () => {};

  console.log(tokens, tokens.join(" "));
  
  return (
    <div>
      <input type="text" value={tokens.join(" ")} readOnly />
      <div>
        <button>AC</button>
        <button value="+" onClick={handleTokenClick}>
          +
        </button>
        <button value="0" onClick={handleTokenClick}>
          0
        </button>
        <button value="1" onClick={handleTokenClick}>
          1
        </button>
        <button value="2" onClick={handleTokenClick}>
          2
        </button>
        <button value="3" onClick={handleTokenClick}>
          3
        </button>
        <button value="4" onClick={handleTokenClick}>
          4
        </button>
        <button value="5" onClick={handleTokenClick}>
          5
        </button>
        <button value="6" onClick={handleTokenClick}>
          6
        </button>
        <button value="7" onClick={handleTokenClick}>
          7
        </button>
        <button value="8" onClick={handleTokenClick}>
          8
        </button>
        <button value="9" onClick={handleTokenClick}>
          9
        </button>
        <button value="=" onClick={handleTokenClick}>
          =
        </button>
      </div>
      <p>Resultado: </p>
    </div>
  );
};
export default Calculator;
