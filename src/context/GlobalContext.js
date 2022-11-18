import { useReducer } from "react";
import { createContext } from "react";
import GlobalReducer from "./GlobalReducer";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    qoute: {},
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //  Get Qoute

  async function getQoute() {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    dispatch({
      type: "GET_QOUTE",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        qoute: state.qoute,
        getQoute,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
