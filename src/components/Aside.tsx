const Aside = () => {
  return (
    <div className='w-[25%] bg-blue-500 h-screen p-8 flex flex-col gap-y-12'>
        <div className='flex gap-x-4'>
            <div className='flex items-center'>
                <span className='w-10 h-10 bg-white rounded-full border border-solid border-white font-medium flex justify-center items-center'>1</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs text-gray-700'>STEP 1</span>
                <span className='text-white text-sm'>YOUR INFO</span>
            </div>
        </div>
        <div className='flex gap-x-4'>
            <div className='flex items-center'>
                <span className='w-10 h-10 bg-transparent text-white rounded-full border border-solid border-white font-medium flex justify-center items-center'>2</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs text-gray-700'>STEP 2</span>
                <span className='text-white text-sm'>SELECT PLAN</span>
            </div>
        </div>
        <div className='flex gap-x-4'>
            <div className='flex items-center'>
                <span className='w-10 h-10 bg-transparent text-white rounded-full border border-solid border-white font-medium flex justify-center items-center'>3</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs text-gray-700'>STEP 3</span>
                <span className='text-white text-sm'>ADD-ONS</span>
            </div>
        </div>
        <div className='flex gap-x-4'>
            <div className='flex items-center'>
                <span className='w-10 h-10 bg-transparent text-white rounded-full border border-solid border-white font-medium flex justify-center items-center'>4</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs text-gray-700'>STEP 4</span>
                <span className='text-white text-sm'>SUMMARY</span>
            </div>
        </div>
    </div>
  )
}

export default Aside;