import React from 'react'
import './Title.css'

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
      <p1>{subTitle}</p1>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
