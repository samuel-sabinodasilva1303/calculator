import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const OPERATION_TOKENS = ["+", "-"];

const Key = styled.button`
  width: 3rem;
  height: 3rem;
  display: inline-block;

  border: 0;
  border-radius: .5rem;
  background-color: #00ffd5;
  color: #fff;
  padding: 0;
`

const KeysGrid = styled.div`
  display: inline-grid;
  gap: .25rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: auto;
`

const Calculator = () => {
  const [tokens, setTokens] = useState([]);
  const [hello, setHello] = useState('');
  const lastToken = tokens[tokens.length - 1]

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
    return OPERATION_TOKENS.includes(token);
  }

  const handleResultClick = () => {
    const newTokens = [...tokens];
  }

  const calculeteResults = (tokens = []) => {
    if (isOperationToken(lastToken)) {
      tokens.pop();
    }

    while (tokens.length > 1) {
      const [firstValue, operation, secondValue] = tokens.splice(-3);
      
      let result;

      if (operation === "+")
        result = Number(firstValue) + Number(secondValue);
      
      tokens.push(result);
    }

    return tokens[0]
  };

  const handleAllClear = () => {
    setTokens([]);
    localStorage.clear('tokens')
  }

  const displayText = useMemo(() => tokens.join(' '), [tokens])

  const result = useMemo(() => calculeteResults([...tokens]), [tokens])

  useEffect(() => { // Roda sempre que há atualização
    if (tokens.length > 0) {
      localStorage.setItem('tokens', JSON.stringify(tokens));
    }
  }, [tokens])

  useEffect(() => { // Roda apenas uma vez na renderização
    const tokens = JSON.parse(localStorage.getItem('tokens'))
    
    if (tokens) {
      setTokens(tokens)
    }
  }, [])

  return (
    <div>
      <input type="text" value={displayText} readOnly />
      <KeysGrid>
        <Key onClick={handleAllClear}>AC</Key>
        <Key value="+" onClick={handleTokenClick}>
          +
        </Key>
        <Key value="0" onClick={handleTokenClick}>
          0
        </Key>
        <Key value="1" onClick={handleTokenClick}>
          1
        </Key>
        <Key value="2" onClick={handleTokenClick}>
          2
        </Key>
        <Key value="3" onClick={handleTokenClick}>
          3
        </Key>
        <Key value="4" onClick={handleTokenClick}>
          4
        </Key>
        <Key value="5" onClick={handleTokenClick}>
          5
        </Key>
        <Key value="6" onClick={handleTokenClick}>
          6
        </Key>
        <Key value="7" onClick={handleTokenClick}>
          7
        </Key>
        <Key value="8" onClick={handleTokenClick}>
          8
        </Key>
        <Key value="9" onClick={handleTokenClick}>
          9
        </Key>
        <Key value="=" onClick={handleResultClick}>
          =
        </Key>
      </KeysGrid>
      <p>Resultado: {result} </p>
    </div>
  );
};
export default Calculator;
