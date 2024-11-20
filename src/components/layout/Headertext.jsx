import React from 'react'

const Headertext = ({Headertext, className}) => {
  return (
    <h2 className={`font-DM font-bold text-[39px] capitalize ${className}`}>{Headertext}</h2>
  )
}

export default Headertext