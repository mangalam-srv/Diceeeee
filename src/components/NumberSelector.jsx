import styled from "styled-components";

const NumberSelector = ({
  seterror,
  error,
  SelectedNumber,
  setSelectedNumber
}) => {

  const arrnumber = [1, 2, 3, 4, 5, 6];

  const NumberSelectorhandler = (value) => {
    setSelectedNumber(value);
    seterror("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>

      <div className="flex">
        {arrnumber.map((value, i) => (
          <Box
            key={i}
            isSelected={value === SelectedNumber}
            onClick={() => NumberSelectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>

      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
 

const NumberSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 400;
  }
  .error{
    color: red;
  }
`;


 const Box = styled.div`
        height:72px ;
        width: 72px;
        border: 1px solid black;
        display: grid;
        font-size: 24px;
        font-weight: 700;
        place-items: center;
        /* display: flex; */
        background-color: ${(props)=>props.isSelected? "black" : "white"};
        color: ${(props)=>props.isSelected? "white" : "black"};
        /* border: ${(props)=>props.isSelected? "2px solid black" : "2px solid white"}; */
        
 `