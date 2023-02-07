import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { ApiContext } from "../../context/apiContext";
import { FieldValues } from "react-hook-form";
import InputData from "../InputData";

const FormData = () => {
  
  const { setData, setResult } = useContext(ApiContext);

  const dataInput = [
    {
      label: "Informe o valor da venda*",
      data: "amount",
    },
    {
      label: "Em quantas parcelas*",
      data: "installments",
    },
    {
      label: "Informe o percenntual de MDR*",
      data: "mdr",
    },
  ];

  const formSchema = yup.object().shape({
    amount: yup
      .number()
      .typeError("O campo precisa ser preenchido por um número")
      .positive("O valor tem que ser maior que 0.")
      .required()
      .max(100000000, "O valor máximo é de R$ 100.000.000")
      .min(1800, "Valor mínimo de R$ 1.800,00."),
    installments: yup
      .number()
      .typeError("O campo precisa ser preenchido por um número.")
      .required()
      .positive("O valor tem que ser maior que 0.")
      .integer()
      .max(12, "Maximo 12 parcelas"),
    mdr: yup
      .number()
      .typeError("O campo precisa ser preenchido por um número.")
      .positive("O valor tem que ser maior que 0.")
      .max(15.53, "O mdr maximo é 15,53."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });
  useEffect(() => {
    if (Object.values(errors).length > 0) {
      setResult(null);
    }
  }, [errors, setResult]);

  const onChange = (data: any) => {
    setData(data);
  };

  return (
   
          <form onChange={handleSubmit(onChange)}>

            {dataInput.map((ele) => (
              <InputData ele={ele} register={register} errors={errors}/>
            ))}

          </form>
  );
};

export default FormData;
