// SetUp Data Layer
//We need this to track the basket
import React,{createContext,useContext,useReducer} from 'react';


//This is a Data Layer
export const StateContext = createContext();

// Build a provider
const StateProvider = ({reducer,initialState,children}) => {
  return (
     <StateContext.Provider value={useReducer(reducer,initialState)}>
           {children}
     </StateContext.Provider>
  )
}
export const useStateValue = () => useContext(StateContext)
export default StateProvider
