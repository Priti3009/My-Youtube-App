import React from 'react'

const Button = ({name}) => { // name is passed  from the Buttonlist component and used here.It is destructured.
  return (
    <div>
        <button className='px-3 p-1 m-3 bg-gray-300 rounded'>{name}</button>
    </div>
    
  )
}

export default Button;