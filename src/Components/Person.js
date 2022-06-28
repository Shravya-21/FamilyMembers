import React from 'react'
import './Person.css'

const Person = (props) => {      
  const {img, name, job} = props.person 

  return (
    <div className='person'>
      <img src={img} alt="" className='image'></img>
      <h4 className='heading'>{name}</h4>
      <h4 className='heading'>{job}</h4>
    </div>
  )
}

export default Person
