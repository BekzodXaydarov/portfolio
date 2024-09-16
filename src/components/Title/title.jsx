import React from 'react'

const Title = ({title,title2,id}) => {
  return (
    <h1 className='title' id={id}> {title}<span>{title2}</span> </h1>
  )
}

export default Title
