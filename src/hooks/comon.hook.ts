import { useLocation } from "react-router-dom";

export const usePayload = <T>() => {
  const state = useLocation().state as T;
  return state;
};
