import styled from "styled-components";

export const  WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 80%;
    height: 40px;
    border: 2px solid orange;
    background: #fff;
    color: orange;
    border-radius: 40px;
  }

  button:hover{
    background: orange;
    color: #fff;
  }
`