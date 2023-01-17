import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  

  input {
    width: 100%;
    height: 37px;
    border: solid 1px var(--color-modal);
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 4px;
    color: black;
    font-weight: 600;

    &:focus {
      outline: 1px solid var(--outline-color-input);
    }
  }

  label{
    font-size: 14px;
    color: var(--modal-color-font);
    font-weight: 600;
    margin-bottom: 3px;
  }

  span{
    font-size: 11px;
    color: #CECECE;
    font-weight: 600;
  }
`;

export default Container;
