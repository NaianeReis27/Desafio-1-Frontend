import Modal from "../components/Modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { ApiContext } from "../context/apiContext";
import Info from "../components/Info";
import { FieldValues } from "react-hook-form";
const MainPage = () => {
  
  const { setData, setResult } = useContext(ApiContext);

  const textLabel = [
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
      .positive()
      .required()
      .max(100000000, "O valor máximo é de R$ 100.000.000")
      .min(1800, "Valor mínimo de R$ 1.800."),
    installments: yup
      .number()
      .typeError("O campo precisa ser preenchido por um número")
      .required()
      .positive()
      .integer()
      .max(12, "Maximo 12 parcelas"),
    mdr: yup
      .number()
      .typeError("O campo precisa ser preenchido por um número")
      .positive(),
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
    <Modal>
      {
        <>
          <form onChange={handleSubmit(onChange)}>
            {textLabel.map((ele) => (
              <div className="Info">
                <label>{ele.label}</label>
                <input type={"number"} {...register(ele.data)} />
                <p>{errors[ele.data]?.message?.toString()}</p>
              </div>
            ))}
          </form>
          <Info></Info>
        </>
      }
    </Modal>
  );
};

export default MainPage;
