import * as React from "react";
import Container from "./styles";
import Info from "../Info";
interface IProps {
  children: React.ReactNode;
}

function Modal({ children }: IProps) {
  return (
    <Container>
      <div className="modal">
        <div>{children}</div>
        <Info/>
      </div>
    </Container>
  );
}

export default Modal;
