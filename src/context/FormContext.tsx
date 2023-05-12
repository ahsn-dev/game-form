import { ReactNode, createContext, useContext, useReducer, useState } from "react"

type actions = {
    type: "ADD_TO_STATE",
    payload: State
}

type State = {
     personalInfo:  {
        name: string,
        email: string,
        phone: number
    }
}

const FormContext = createContext({});

export const useFormContext = () => {
    return useContext(FormContext)
}

const initState = {
    personalInfo:  {
        name: "",
        email: "",
        phone: 0
    }
}

const FormReducer = (state:State, action:actions) => {
    switch (action.type) {
        case "ADD_TO_STATE":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

const FormProvider = ({children}:{children:ReactNode}) => {
    const [pageCounter, setPageCounter] = useState(1)
    const [state, dispatch] = useReducer(FormReducer, initState);

  return (
    <FormContext.Provider value={{pageCounter, setPageCounter, state, dispatch}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormProvider
