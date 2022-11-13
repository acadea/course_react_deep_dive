import { useContext } from "react";
import { createContext } from "react";

const state = {
  hey: 'mate',
}



export const GlobalContext = createContext();


export function GlobalProvider(props){
  return (
    <GlobalContext.Provider {...props} value={state}></GlobalContext.Provider>
  )
}


export function useGlobalContext(){
  return useContext(GlobalContext);
}