const PersonalInfo = () => {
  return (
    <div className='pt-8 pl-60 gap-y-8 flex flex-col'>
        <h1 className='text-2xl font-semibold'>Personal Info</h1>
        <p>Please provide your name, email, address and phone number.</p>
        <div className='flex flex-col gap-y-4'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='e.g. Stephen King' className='border border-solid border-gray-400 text-sm py-2 pl-1 rounded' />
        </div>
        <div className='flex flex-col gap-y-4'>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder='e.g. stephenking@lorem.com' className='border border-solid border-gray-400 text-sm py-2 pl-1 rounded' />
        </div>
        <div className='flex flex-col gap-y-4'>
            <label htmlFor="tel">Phone Number</label>
            <input type="tel" id="tel" placeholder='e.g. +1 234 567 890' className='border border-solid border-gray-400 text-sm py-2 pl-1 rounded' />
        </div>
        <button className='flex self-end px-4 py-3 mt-16 text-sm rounded text-white bg-[#02295A]'>Next Step</button>
    </div>
  )
}

export default PersonalInfo