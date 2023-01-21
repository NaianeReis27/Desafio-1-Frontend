import "./styles.sass";
import { UseFormRegister,FieldErrorsImpl, FieldValues} from "react-hook-form/dist/types";



interface IProps {
  ele: Idata
  register: UseFormRegister<FieldValues>
  errors:Partial<FieldErrorsImpl>
}

interface Idata {
  label: string;
  data: string;
}

function InputData({ele, register, errors}:IProps) {
  return (
    <div className="Info">
      <label>{ele.label}</label>
      <input type={"number"} {...register(ele.data)} />
      <p>{errors[ele.data]?.message?.toString()}</p>
    </div>
  );
}

export default InputData;
