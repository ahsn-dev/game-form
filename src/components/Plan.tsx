import { Switch } from "@mui/material"
import { useState } from "react"
import { useFormContext } from "../context/FormContext";


const Plan = () => {
  const [activePlan, setActivePlan] = useState('')
  const [dateActivePlan, setDateActivePlan] = useState(true)

  const {pageCounter, setPageCounter, state, dispatch} = useFormContext()


  const activePlanFunction = (e:any) => {
    setActivePlan(e.currentTarget.dataset.active)    
  }

  const handleSubmit = () => {
    dispatch({
      type: 'ADD_TO_STATE',
      payload: {
        plan: {
          dateType: !dateActivePlan ? "monthly" : "yearly",
          planType: activePlan
      }
      }
    })
    console.log(state);
    setPageCounter(3)
  }
    return (
      <div className='pt-8 pl-60 gap-y-8 flex flex-col'>
          <h1 className='text-2xl font-semibold'>Select Your Plan</h1>
          <p>You have the option of monthly or yearly biling.</p>
          {!dateActivePlan ?
          <div className="flex gap-x-6">
              <div data-active="Arcade" onClick={activePlanFunction} className={`w-36 h-48 cursor-pointer rounded-md border ${activePlan === "Arcade"? "bg-sky-100 border-gray-400" : "border-solid border-gray-200"} flex flex-col p-4 gap-y-12`}>
                <div>
                    <img className="w-10 h-10" src="../../public/images/game1.png" alt="game photo" />
                </div>
                <div>
                    <p>Arcade</p>
                    <span className="text-xs text-gray-500">9$/mo</span>
                </div>
              </div>
              <div onClick={activePlanFunction} data-active="Advanced" className={`w-36 h-48 cursor-pointer rounded-md border ${activePlan === "Advanced"? "bg-sky-100 border-gray-400" : "border-solid border-gray-200"} flex flex-col p-4 gap-y-12`}>
                <div>
                <img className="w-10 h-10" src="../../public/images/game2.png" alt="game photo" />
                </div>
                <div>
                    <p>Advanced</p>
                    <span className="text-xs text-gray-500">12$/mo</span>
                </div>
              </div>
              <div onClick={activePlanFunction} data-active="Pro" className={`w-36 h-48 cursor-pointer rounded-md border ${activePlan === "Pro"? "bg-sky-100 border-gray-400" : "border-solid border-gray-200"} flex flex-col p-4 gap-y-12`}>
                <div>
                <img className="w-10 h-10" src="../../public/images/game3.png" alt="game photo" />
                </div>
                <div>
                    <p>Pro</p>
                    <span className="text-xs text-gray-500">15$/mo</span>
                </div>
              </div>
          </div> :
          <div className="flex gap-x-6">
              <div data-active="Arcade" onClick={activePlanFunction} className={`w-36 h-48 cursor-pointer rounded-md border ${activePlan === "Arcade"? "bg-sky-100 border-gray-400" : "border-solid border-gray-200"} flex flex-col p-4 gap-y-12`}>
                <div>
                    <img className="w-10 h-10" src="../../public/images/game1.png" alt="game photo" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <p>Arcade</p>
                    <div className="text-xs text-gray-500">90$/mo</div>
                    <div className="text-xs text-black">2 months free</div>
                </div>
              </div>
              <div onClick={activePlanFunction} data-active="Advanced" className={`w-36 h-48 cursor-pointer rounded-md border ${activePlan === "Advanced"? "bg-sky-100 border-gray-400" : "border-solid border-gray-200"} flex flex-col p-4 gap-y-12`}>
                <div>
                <img className="w-10 h-10" src="../../public/images/game2.png" alt="game photo" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <p>Advanced</p>
                    <div className="text-xs text-gray-500">120$/mo</div>
                    <div className="text-xs text-black">2 months free</div>
                </div>
              </div>
              <div onClick={activePlanFunction} data-active="Pro" className={`w-36 h-48 cursor-pointer rounded-md border ${activePlan === "Pro"? "bg-sky-100 border-gray-400" : "border-solid border-gray-200"} flex flex-col p-4 gap-y-12`}>
                <div>
                <img className="w-10 h-10" src="../../public/images/game3.png" alt="game photo" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <p>Pro</p>
                    <div className="text-xs text-gray-500">150$/mo</div>
                    <div className="text-xs text-black">2 months free</div>
                </div>
              </div>
          </div>}
          <div className="flex justify-center items-center bg-sky-100 h-12 rounded">
            <span>Monthly</span>
            <Switch checked={dateActivePlan} onClick={() => {
              setDateActivePlan(!dateActivePlan)
              console.log(dateActivePlan);
            }} sx={{
              ".MuiSwitch-track": {
                opacity: 100,
                backgroundColor: "#02295A"
              },
              ".css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track" : {
                backgroundColor: "#02295A",
                opacity: 100,
              },
              ".MuiSwitch-thumb": {
                backgroundColor: "white"
              }
            }} />
            <span>Yearly</span>
          </div>
          <div className="flex justify-between items-end">
            <button className="text-sm text-gray-400 pb-3">Go back</button>
            <button onClick={handleSubmit} className='flex self-end px-4 py-3 mt-16 text-sm rounded text-white bg-[#02295A]'>Next Step</button>
          </div>
      </div>
    )
  }
  
  export default Plan