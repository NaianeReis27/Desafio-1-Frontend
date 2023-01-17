import Container from "./styles";
import { UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";

interface IProps  { 
    label: string
    data: string
    register: UseFormRegister<FieldValues>
}



function ContainerInput({label, data, register}: IProps) {
    return (
    <Container>
        <label>{label}</label>
        <input type={"number"} {...register(data)}/>
        <span>Máximo de 12 parcelas</span>
    </Container>
    );
  }
  
  export default ContainerInput;
  