import React from 'react'

const Button = ({className, ButtonText,onClick}) => {
  return (
    <button onClick={onClick} className={`p-4 w-[148px] font-DM font-normal text-sm hover:bg-Primary bg-white  hover:text-white hover:font-bold transition-all duration-300 border border-[#2B2B2B] ${className}`}>{ButtonText}</button>
  )
}

export default Button