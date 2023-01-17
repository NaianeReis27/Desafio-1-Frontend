import Container from "./styles";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputInfo from "../InputInfo";

const data = [
  { title: 1, price: 0.0, key: "data1" },
  { title: 15, price: 0.0, key: "data2" },
  { title: 30, price: 0.0, key: "data3" },
  { title: 90, price: 0.0, key: "data4" },
];

function Info() {
  const {setDays} = useContext(ApiContext)

  const formSchema = yup.object().shape({
    data1: yup.number(),
    data2: yup.number(),
    data3: yup.number(),
    data4: yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any) => {
   setDays(Object.values(data))
  };


  return (
    <Container onChange={handleSubmit(onSubmit)}>
      {data.map((ele, index) => (
        <InputInfo key={index} ele={ele} index={index} register={register} />
      ))}
    </Container>
  );
}

export default Info;
