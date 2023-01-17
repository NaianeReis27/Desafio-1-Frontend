import styled from "styled-components";

const Container = styled.form`

  width: 231px;
  min-height: 100%;
  background-color: rgba(209, 220, 227, 0.18);
  color: var(--color-font-blue);
  padding: 83px 35px 35px 35px;
  font-style: italic;
  gap: 25px;
  display: flex;
  flex-direction: column;

  &:before {
    content: "VOCÊ RECEBERÁ:";
    border-bottom: 1px solid rgba(61, 117, 187, .5);
    font-size: 16px;
    font-weight: 700;
  }
  
  div {
    color: var(--color-font-blue-span);
    display: flex;
    align-items: center;
    gap: 4px;
    input{
      border: none;
      outline: none;
      background: none;
      width: 15.5px;
      color: var(--color-font-blue-span);
      font-style: italic;
      padding: 0;
      font-size: 16px;
      text-align: center;
    }
    p{
      margin: 0px;
    }
    span {
      font-weight: 700;
    }
  }
`;

export default Container;
