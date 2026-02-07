import styled from "styled-components";
import { Button } from "../styled/button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/1.png" alt="dice image" />
      </div>

      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  display: flex;

  .content {
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;

    h1 {
      font-size: 66px;
      white-space: nowrap;
      font-weight: 600;
    }

    button {
      margin-left: 70px;
      font-size: 15px;
    }
  }
`;
