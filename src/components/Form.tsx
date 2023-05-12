import { useFormContext } from '../context/FormContext';
import FinishingUp from './FinishingUp';
import ConfirmMessage from "./ConfirmMessage";
import Plan from "./Plan";
import AddsOn from "./AddsOn";
import PersonalInfo from "./PersonalInfo";

const Form = () => {
  const {pageCounter, setPageCounter, state, dispatch} = useFormContext()
    console.log(state);
    
    const form = () => {
        switch (pageCounter) {
            case 1:
                return <PersonalInfo />
            case 2:
                return <Plan />
            case 3: 
            return <AddsOn />
            case 4:
                return <FinishingUp />
            case 5:
            <ConfirmMessage />
                
        }
    }
  return (
    <>
    {form()}
    </>
  )
}

export default Form