import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from './RollDice';
import {Button}from "../styled/button"
import Rules from "./Rules";

import { useState } from 'react';


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,seterror]=useState("");
  const [showrules,setshowrules]=useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (!SelectedNumber){
      seterror("You Have Not Selected Any Number");
      return; // 🛑 guard
    } 
    seterror("");
      

    const random = generateRandomNumber(1, 6);
    setCurrentDice(random);

    if (SelectedNumber === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined); // reset
  };

  const resetscore=()=>{
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          seterror={seterror}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetscore}>RESET SCORE</OutlineButton>
        <Button onClick={()=>setshowrules((prev)=>!prev)}>{
          showrules? "HIDE" : "SHOW"} RULES</Button>
      </div>
      { showrules && <Rules/>}
    </MainContainer>
  );
};


export default GamePlay;

const MainContainer = styled.main`
padding-top: 1px;

  .top_section {

    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    
    align-items: center;
  }
`;
const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
