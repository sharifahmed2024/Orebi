import React from 'react'
import Headertext from './Headertext'
import { FaAngleRight } from 'react-icons/fa6'

const Bredcumb = () => {
  return (
    <div>
        <Headertext className='mb-2.5' Headertext={`${window.location.pathname.split('/')[1]} `}/>
        <p className='flex items-center capitalize mb-32 text-[#767676]'>Home <FaAngleRight /> {`${window.location.pathname.split('/')[1]}`}</p>
    </div>
  )
}

export default Bredcumb