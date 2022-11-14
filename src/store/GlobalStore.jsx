import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";


export const ACTIONS = {
  UPDATE_HEY: 'update-hey'
}


export function globalReducer(state, action){
  console.log({state, action});

  switch(action.type){

    case ACTIONS.UPDATE_HEY:
      return {
        ...state,
        hey: action.payload,
      }
    default:
      return state

  }
}

export const GlobalContext = createContext();



export function GlobalProvider(props){
  const [state, dispatch] = useReducer(globalReducer, {
    hey: 'mate',
  });

  return (
    <GlobalContext.Provider {...props} value={{
      state,
      dispatch,
    }}></GlobalContext.Provider>
  )
}


export function useGlobalContext(){
  return useContext(GlobalContext);
}