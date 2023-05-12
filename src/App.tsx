import FormProvider from "./context/FormContext";
import Aside from "./components/Aside";
import Form from "./components/Form";

export default function App() {
  return (
    <FormProvider>
    <div className="flex">
    <Aside />
    <Form />
    </div>
    </FormProvider>
  )
}
