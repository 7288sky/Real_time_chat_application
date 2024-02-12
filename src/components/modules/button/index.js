import React from 'react'

function Button({
    label='Button',
    type='button',
    className='',
    disabled=false
}) {
  return (
    <button type={type} className={`"hover:brightness-110 hover:animate-pulse font-bold py-3 px-6
     rounded-full bg-gradient-to-r
     from-blue-500 to-pink-500 text-white" ${className} `} disabled={disabled}  >{label}</button>
  )
}

export default Button