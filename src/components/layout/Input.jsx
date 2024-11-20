import React from 'react'

const Input = ({LabelText, id, type, placeholder, children, className,InputValue,onChange}) => {
  return (
    <div className={`border-b relative ${className}`}>
        <label className='font-bold' htmlFor={id}>{LabelText} </label>
        <input onChange={onChange} value={InputValue} className='block w-full outline-none pt-2.5 pb-4' id={id} type={type} placeholder={placeholder} />
        {children}
    </div>
  )
}

export default Input