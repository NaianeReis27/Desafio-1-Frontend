import  "./styles.sass";
import { UseFormRegister, UseFormGetValues,FieldErrorsImpl} from "react-hook-form/dist/types";
import { FieldValues } from "react-hook-form/dist/types";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/apiContext";

interface IProps {
  ele: Idata;
  register: UseFormRegister<FieldValues>
  index: number
  getValues: UseFormGetValues<FieldValues>
  errors:Partial<FieldErrorsImpl>
}

interface Idata {
  title: number;
  price: number;
  key: string;
}

function InputDays({ ele, register, index, getValues }: IProps) {

  const {result} = useContext(ApiContext);

  const [char, setchar] = useState(2)
  const value = getValues(ele.key)


  useEffect(()=>{
     if(value){
      setchar(value.length)
     }
  },[value])
  
  
  return (
    <div className="infoDays">
      <p>{`Em`}</p>
      <input style={{width: `${char*10}px`}} 
        type={"text"}
        {...register(ele.key)}
        name={ele.key}
      />
      <p>{Number(getValues(ele.key)) === 1? `dia`: "dias"}</p>
      {
        result? <span>{`R$ ${result[index]}`}</span> : <span>R$ 0,00</span>
      }
    </div>
  );
};

export default InputDays;
