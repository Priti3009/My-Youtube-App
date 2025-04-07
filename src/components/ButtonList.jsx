import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list=["All","Games","Movies","Cooking","News","Cartoons"];
    
  return (
    <div className='flex'>
      { list.map((item,index)=>(<Button key={index} name={item}/>)) // all the list items is passed one by one to the button component as props
      }
     
    </div>
  )
}

export default ButtonList