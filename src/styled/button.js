import styled from "styled-components"

export const Button =styled.button`
        background-color: black;
        color: white;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        
        min-width: 220px;
        border: none;
         transition: 0.3s background ease-in;
        &:hover{
            background-color: white;
            color: black;
            font-weight: 200;
            border: 1px solid black;
            transition: 0.3s background ease-in;
        }

`


export const OutlineButton =styled(Button)`

background-color: white;
border: 1px solid black;
color: black;

&:hover{
            background-color: black;
            color: white;
            font-weight: 200;
            border: 1px solid transparent;
        }
       

`