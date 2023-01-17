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

  useEffect(() => {
    console.log(days, data)
    if(data!= null){
      api
      .post("", { ...data, days: days })
      .then((res) => res)
      .then((res) => {
        setResult(Object.values(res.data));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    }
  },[data, days]);

  return (
    <ApiContext.Provider
      value={{
        result,
        setDays,
        setData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
