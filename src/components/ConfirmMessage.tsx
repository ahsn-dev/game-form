const ConfirmMessage = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 mt-40">
        <img className="w-20 h-20" src="../../public/images/tick.png" alt="" />
        <h1 className="text-4xl font-semibold">Thank you!</h1>
        <p className="w-[46%]">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default ConfirmMessage