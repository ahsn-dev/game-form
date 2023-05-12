import { useState } from "react"
import { useFormContext } from "../context/FormContext"

const AddsOn = () => {
    const [activeAddOns, setActiveAddOns] = useState({"Online service": {active: false, price: ""}, "Large storage": {active:false, price: ""}, "Customizable profile": {active: false, price:""}})
  
    const {pageCounter, setPageCounter, state, dispatch} = useFormContext()

    const handleSubmit = () => {
        dispatch({
            type: 'ADD_TO_STATE',
            payload: {
              addons: activeAddOns
            }
          })
          console.log(state);
          setPageCounter(4)
    }

    const addonsHandler = (e:any) => {
        if(e.currentTarget.checked) {
            console.log("checked");
            
            setActiveAddOns({
                ...activeAddOns,
                [e.currentTarget.dataset.name]: {
                    active: true,
                    price: e.currentTarget.dataset.price
                }
            })
        } else {
            console.log("unchecked");
            
            setActiveAddOns({
                ...activeAddOns,
                [e.currentTarget.dataset.name]: {
                    active: false,
                    price: ""
                }
            })
        }
        
    }

    const goBackHandler = () => {
        setPageCounter(2)
    }
  return (
    <div className="pt-8 pl-60 gap-y-8 flex flex-col w-[75%]">
        <h1 className='text-3xl font-semibold'>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div onClick={(e) => {
            console.log(e.target)
        }} className="flex flex-col gap-y-4">
            <label htmlFor="onlineService">
                <div className="border border-solid border-gray-200 h-20 rounded-lg flex justify-between items-center p-8 w-[66%] cursor-pointer hover:border-blue-600">
                    <div className="flex justify-center items-center gap-x-4">
                        <div>
                            <input onClick={addonsHandler} data-name="Online service" data-price="10" type="checkbox" name="onlineService" id="onlineService" />
                        </div>
                        <div>
                            <h2 className="font-bold">Online service</h2>
                            <span className="text-sm">Access to multiplayer games</span>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold">+$10/yr</span>
                    </div>
                </div>
            </label>
            <label htmlFor="largeStorage">
                <div className="border border-solid border-gray-200 h-20 rounded-lg flex justify-between items-center p-8 w-[66%] cursor-pointer hover:border-blue-600">
                    <div className="flex justify-center items-center gap-x-4">
                        <div>
                            <input data-name="Large storage" data-price="20" onClick={addonsHandler} type="checkbox" name="largeStorage" id="largeStorage" />
                        </div>
                        <div>
                            <h2 className="font-bold">Large storage</h2>
                            <span className="text-sm">1TB of cloude save</span>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold">+$20/yr</span>
                    </div>
                </div>
            </label>
            <label htmlFor="customizeProfile">
                <div className="border border-solid border-gray-200 h-20 rounded-lg flex justify-between items-center p-8 w-[66%] cursor-pointer hover:border-blue-600">
                    <div className="flex justify-center items-center gap-x-4">
                        <div>
                            <input data-name="Customizable profile" data-price="20" onClick={addonsHandler} type="checkbox" name="customizeProfile" id="customizeProfile" />
                        </div>
                        <div>
                            <h2 className="font-bold">Customizable profile</h2>
                            <span className="text-sm">Custom theme on your profile</span>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold">+$20/yr</span>
                    </div>
                </div>
            </label>
        </div>
          <div className="flex justify-between items-end w-[66%] mt-16">
            <button onClick={goBackHandler} className="text-sm text-gray-400 pb-3">Go back</button>
            <button onClick={handleSubmit} className='flex self-end px-4 py-3 text-sm rounded text-white bg-[#02295A]'>Next Step</button>
          </div>
    </div>
  )
}

export default AddsOn