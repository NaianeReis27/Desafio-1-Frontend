import Modal from "../components/Modal";
import ContainerInput from "../components/ContainerInput";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../context/apiContext";
const MainPage = () => {

  const {setData} = useContext(ApiContext)

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
    }
  ];

  const formSchema = yup.object().shape({
    amount: yup.number().required("Valor da transação é obrigatório"),
    installments: yup.number().required("Número de parcelas é obrigatório"),
    mdr: yup.number().required("A taxa é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data:any) => {
    setData(data)
  };

  return (
    <Modal>
      {
        <form onChange={handleSubmit(onSubmit)}>
          {textLabel.map((ele, index) => (
            <ContainerInput {...ele} register={register} />
          ))}
        </form>
      }
    </Modal>
  );
};

export default MainPage;
