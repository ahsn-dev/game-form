import { useFormContext } from "../context/FormContext"

const FinishingUp = () => {
    const {pageCounter, setPageCounter, state, dispatch} = useFormContext()

    const goBackHandler = () => {
        setPageCounter(3)
    }
    console.log(state);
    
    return (
        <div className="pt-8 pl-60 gap-y-8 flex flex-col w-[75%]">
            <h1 className='text-3xl font-semibold'>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="bg-gray-100 rounded-md text-black flex flex-col justify-between p-6 w-[60%] h-64">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold">{state.plan.planType} ({state.plan.dateType})</span>
                        <a href="#" className="underline">Change</a>
                    </div>
                    <span>{state.plan.price}$/yr</span>
                </div>
                <hr className="border border-solid border-gray-300 border-b" />
                <div className="flex flex-col gap-y-4">
                    <div className="flex justify-between">
                        <span>Online service</span>
                        <span>+{state.addons["Online service"].active ? state.addons["Online service"].price : 0}$</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Larger storage</span>
                        <span>+{state.addons["Large storage"].active ? state.addons["Large storage"].price : 0}$/yr</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Customizable profile</span>
                        <span>+{state.addons["Customizable profile"].active ? state.addons["Customizable profile"].price : 0}$</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-around w-[60%] gap-x-48">
                <span className="text-gray-400">Total (per year)</span>
                <span className="text-blue-600 text-xl">{+state.plan.price + +state.addons["Online service"].price + +state.addons["Large storage"].price + +state.addons["Customizable profile"].price}$</span>
            </div>
              <div className="flex justify-between items-end w-[66%] mt-16">
                <button onClick={goBackHandler} className="text-sm text-gray-400 pb-3">Go back</button>
                <button className='flex self-end px-8 py-4 text-sm rounded text-white bg-[#02295A]'>Confirm</button>
              </div>
        </div>
      )
}

export default FinishingUp