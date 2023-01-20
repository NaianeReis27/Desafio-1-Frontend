import  "./styles.sass";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputInfo from "../InfoDays";
import { FieldValues} from "react-hook-form";

const data_input = [
  { title: 1,  price: 0.0, key: "data1" },
  { title: 15, price: 0.0, key: "data2" },
  { title: 30, price: 0.0, key: "data3" },
  { title: 90, price: 0.0, key: "data4" },
];

function Info() {
  const {setDays} = useContext(ApiContext)

  const formSchema = yup.object().shape({
    data1: yup.number().positive(),
    data2: yup.number().positive(),
    data3: yup.number().positive(),
    data4: yup.number().positive(),
  });

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues:{data1: 1, data2: 15, data3: 30, data4: 90 },
    resolver: yupResolver(formSchema),
  });

  const onChange = (value: any) => {
   setDays(Object.values(value))
  };


  return (
    <form onChange={handleSubmit(onChange)}>
      {data_input.map((ele, index) => (
        <InputInfo key={index} ele={ele} getValues={getValues} index={index} register={register} errors= {errors} />
      ))}
    </form>
  );
}

export default Info;
