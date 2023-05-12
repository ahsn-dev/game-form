import { Switch } from "@mui/material"
const Plan = () => {
    return (
      <div className='pt-8 pl-60 gap-y-8 flex flex-col'>
          <h1 className='text-2xl font-semibold'>Select Your Plan</h1>
          <p>You have the option of monthly or yearly biling.</p>
          <div className="flex gap-x-6">
              <div className="w-36 h-48 rounded-md border border-solid border-gray-200 flex flex-col p-4 gap-y-12">
                <div>
                    <img className="w-10 h-10" src="../../public/images/game1.png" alt="game photo" />
                </div>
                <div>
                    <p>Arcade</p>
                    <span className="text-xs text-gray-500">9$/mo</span>
                </div>
              </div>
              <div className="w-36 h-48 rounded-md border border-solid border-gray-200 flex flex-col p-4 gap-y-12">
                <div>
                <img className="w-10 h-10" src="../../public/images/game2.png" alt="game photo" />
                </div>
                <div>
                    <p>Advanced</p>
                    <span className="text-xs text-gray-500">12$/mo</span>
                </div>
              </div>
              <div className="w-36 h-48 rounded-md border border-solid border-gray-200 flex flex-col p-4 gap-y-12">
                <div>
                <img className="w-10 h-10" src="../../public/images/game3.png" alt="game photo" />
                </div>
                <div>
                    <p>Pro</p>
                    <span className="text-xs text-gray-500">15$/mo</span>
                </div>
              </div>
          </div>
          <div className="flex justify-center items-center bg-sky-100 h-12 rounded">
            <span>Monthly</span>
            <Switch sx={{
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
            <button className='flex self-end px-4 py-3 mt-16 text-sm rounded text-white bg-[#02295A]'>Next Step</button>
          </div>
      </div>
    )
  }
  
  export default Plan