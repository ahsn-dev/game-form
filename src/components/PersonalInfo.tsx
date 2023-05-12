import { useForm, SubmitHandler } from "react-hook-form"
import { useFormContext } from "../context/FormContext";


type Inputs = {
  name: string,
  email: string,
  phone: number
};

const PersonalInfo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const {pageCounter, setPageCounter, state, dispatch} = useFormContext()
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(pageCounter);
    
    dispatch({
      type: 'ADD_TO_STATE',
      payload: {
        ...data, id: crypto.randomUUID()
      }
    })
    setPageCounter(2)
  }

  return (
    <div className='pt-8 pl-60 gap-y-8 flex flex-col'>
        <h1 className='text-2xl font-semibold'>Personal Info</h1>
        <p>Please provide your name, email, address and phone number.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-8">
          <div className='flex flex-col gap-y-4'>
              <label htmlFor="name">Name</label>
              <input {...register("name", { required: true })} type="text" id="name" placeholder='e.g. Stephen King' className='border border-solid border-gray-400 text-sm py-2 pl-1 rounded' />
              {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div className='flex flex-col gap-y-4'>
              <label htmlFor="email">Email Address</label>
              <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="email" id="email" placeholder='e.g. stephenking@lorem.com' className='border border-solid border-gray-400 text-sm py-2 pl-1 rounded' />
              {errors.email?.type === "required" && <span className="text-red-500">This field is required</span>}
              {errors.email?.type === "pattern" && <span className="text-red-500">This email is not valid</span>}
          </div>
          <div className='flex flex-col gap-y-4'>
              <label htmlFor="tel">Phone Number</label>
              <input {...register("phone", { required: true, pattern: /^09\d{9}$/})} type="tel" id="tel" placeholder='e.g. 0912 989 8989' className='border border-solid border-gray-400 text-sm py-2 pl-1 rounded' />
              {errors.phone?.type === "required" && <span className="text-red-500">This field is required</span>}
              {errors.phone?.type === "pattern" && <span className="text-red-500">This phone number is not valid</span>}
          </div>
        <button type="submit" className='flex self-end px-4 py-3 mt-16 text-sm rounded text-white bg-[#02295A]'>Next Step</button>
        </form>
    </div>
  )
}

export default PersonalInfo