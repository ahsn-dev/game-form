const AddsOn = () => {
  return (
    <div className="pt-8 pl-60 gap-y-8 flex flex-col w-[75%]">
        <h1 className='text-3xl font-semibold'>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div className="flex flex-col gap-y-4">
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
            <div className="border border-solid border-gray-200 h-20 rounded-lg flex justify-between items-center p-8 w-[66%] cursor-pointer hover:border-blue-600">
                <div className="flex justify-center items-center gap-x-4">
                    <div>
                        <input type="radio" name="onlineService" id="onlineService" />
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
            <div className="border border-solid border-gray-200 h-20 rounded-lg flex justify-between items-center p-8 w-[66%] cursor-pointer hover:border-blue-600">
                <div className="flex justify-center items-center gap-x-4">
                    <div>
                        <input type="radio" name="onlineService" id="onlineService" />
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
        </div>
          <div className="flex justify-between items-end w-[66%] mt-16">
            <button className="text-sm text-gray-400 pb-3">Go back</button>
            <button className='flex self-end px-4 py-3 text-sm rounded text-white bg-[#02295A]'>Next Step</button>
          </div>
    </div>
  )
}

export default AddsOn