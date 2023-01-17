import Container from "./styles";
import { UseFormRegister } from "react-hook-form/dist/types";
import { FieldValues } from "react-hook-form/dist/types";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";

interface IProps {
  ele: Idata;
  register: UseFormRegister<FieldValues>;
  index: number
}

interface Idata {
  title: number;
  price: number;
  key: string;
}



function InputInfo({ ele, register, index }: IProps) {
 
  const {result} = useContext(ApiContext);
  console.log(result, index)
  return (
    <Container>
      <p>{`Em`}</p>
      <input
        type={"text"}
        {...register(ele.key)}
        defaultValue={ele.title}
        name={ele.key}
      />
      <p>{`dias`}</p>
      {
        result? <span>{`R$ ${result[index]}`}</span> : <span>R$ 0,00</span>
      }
    </Container>
  );
};

export default InputInfo;
