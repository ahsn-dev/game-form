import { useState } from "react"
import { useFormContext } from "../context/FormContext"

const AddsOn = () => {
    const [activeAddOns, setActiveAddOns] = useState({addonsType: "", price: ""})
  
    const {pageCounter, setPageCounter, state, dispatch} = useFormContext()

    const handleSubmit = () => {
        dispatch({
            type: 'ADD_TO_STATE',
            payload: {
              addons: {
                addonsType: activeAddOns.addonsType,
                price: activeAddOns.price
            }
            }
          })
        //   console.log(state);
          setPageCounter(4)
    }

    const addonsHandler = (e:any) => {
        setActiveAddOns({
        addonsType: e.currentTarget.dataset.name,
        price: e.currentTarget.dataset.price
        })
    }
  return (
    <div className="pt-8 pl-60 gap-y-8 flex flex-col w-[75%]">
        <h1 className='text-3xl font-semibold'>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div onClick={(e) => {
            console.log(e.target)
        }} className="flex flex-col gap-y-4">
            <label onClick={addonsHandler} data-name="onlineServie" data-price="10" htmlFor="onlineService">
                <div className="border border-solid border-gray-200 h-20 rounded-lg flex justify-between items-center p-8 w-[66%] cursor-pointer hover:border-blue-600">
                    <div className="flex justify-center items-center gap-x-4">
                        <div>
                            <input type="radio" name="onlineService" id="onlineService" />
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
            <label onClick={addonsHandler} data-name="largeStorage" data-price="20" htmlFor="largeStorage">
                <div className="border border-solid border-gray-200 h-20 rounded-lg flex justify-between items-center p-8 w-[66%] cursor-pointer hover:border-blue-600">
                    <div className="flex justify-center items-center gap-x-4">
                        <div>
                            <input type="radio" name="onlineService" id="largeStorage" />
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
            <label onClick={addonsHandler} data-name="customizeProfile" data-price="20" htmlFor="customizeProfile">
                <div className="border border-solid border-gray-200 h-20 rounded-lg flex justify-between items-center p-8 w-[66%] cursor-pointer hover:border-blue-600">
                    <div className="flex justify-center items-center gap-x-4">
                        <div>
                            <input type="radio" name="onlineService" id="customizeProfile" />
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
            <button className="text-sm text-gray-400 pb-3">Go back</button>
            <button onClick={handleSubmit} className='flex self-end px-4 py-3 text-sm rounded text-white bg-[#02295A]'>Next Step</button>
          </div>
    </div>
  )
}

export default AddsOn