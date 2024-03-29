
const Buttons = ({label , iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
        {label}
         
        { iconURL &&  <img src={iconURL} alt="arrow right now" className="ml-2 roundedfull w-5 h-5 " /> }
    
    </button>
    
  )
}

export default Buttons