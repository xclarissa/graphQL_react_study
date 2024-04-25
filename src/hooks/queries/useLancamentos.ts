import { useQuery } from "@apollo/client";
import { QUERY_OBTER_DESTAQUES } from "./queries";
import { IDestaques } from "../../interfaces/IDestaques";

export const useLancamentos = () => {
  return useQuery<IDestaques>(QUERY_OBTER_DESTAQUES);
};
