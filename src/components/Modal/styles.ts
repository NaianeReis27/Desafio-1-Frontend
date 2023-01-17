import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .modal {
    max-width: 608px;
    width: 100%;
    min-height: 389px;
    outline: solid 1px #d1dce3;
    background-color: var(--white-color);
    display: flex;
    margin: 10px;
    border-radius: 4px;

    & > div:nth-child(1) {
      max-width: 377px;
      width: 100%;
      padding: 41px 71px 44px 56px;
      display: flex;
      flex-direction: column;
      gap: 22px;

      &::before {
        content: "Simule sua Antecipação";
        font-size: 24px;
        font-weight: bold;
        color: #656565;
      }
    }
  }
`;

export default Container;
