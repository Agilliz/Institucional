

const Button = ({children}) => {
 

  return (
    <div className='w-full h-14 font-sans font-bold text-sm' id='button'>
        <button className='h-full w-full flex justify-center items-center button text-white'>
          {children}
        </button>
    </div>
  )
}





export default Button