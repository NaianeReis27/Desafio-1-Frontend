import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import api from "../services/api";
interface ApiContextProps {
  children: ReactNode;
}

export interface ApiContextData {
  result: null | number[];
  setDays: Dispatch<SetStateAction<number[]>>;
  setData: Dispatch<SetStateAction<Idata[]| null>>;
  setErr: Dispatch<SetStateAction<boolean>>;
  setResult: Dispatch<SetStateAction<null | number[]>>;
  err: boolean
  data:Idata[]| null
}

export interface Idata {
  amount: number;
  installments: number;
  mdr: number;
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiContextProvider = ({ children }: ApiContextProps) => {

  const [result, setResult] = useState<null | number[]>(null);
  const [days, setDays] = useState<number[]>([1, 15, 30, 90]);
  const [data, setData] = useState<Idata[]| null>(null);
  const [err , setErr] = useState<boolean>(false);

  useEffect(() => {
    if(data!= null){
      api
      .post("", { ...data, days: days })
      .then((res) => res)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => setResult(null));
    }
  },[data, days]);

  return (
    <ApiContext.Provider
      value={{
        err,
        setErr,
        result,
        setResult,
        setDays,
        setData,
        data,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
