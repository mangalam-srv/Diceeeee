import { useState } from "react";
import styled from "styled-components";

const RollDice = ({currentDice,rollDice }) => {

  // ✅ 1. State at top level


  // ✅ 2. Function also at top level
  

  return (
    <Dicecontainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/0${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on dice to roll</p>
    </Dicecontainer>
  );
};

export default RollDice

const Dicecontainer = styled.div`
margin-top: 48px ;
display: flex;
flex-direction: column;
align-items: center;

.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
    
}
`;