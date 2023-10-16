import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'


const ToDo = ({text,updateMode, Delete_Mode}) => {
  return (
    <div className='ToDo'>
       <div className='text'>{text}</div> 
       <div className = 'icons'>

       <BiEdit className='icon' onClick={updateMode} />
       <AiFillDelete className='icon' onClick={Delete_Mode} />
       </div>
       </div>

    

  )

}

export default ToDo
