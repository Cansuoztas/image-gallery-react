
import React from 'react'

const Picture = ({data}) => {
  return (
    <div className='picture'>
        <div className='imageContainer'>
            <img src={data.src.large} alt="" />
        </div>
        <div className='info'>
            <p style={{color : 'lightblue'}}>{data.photographer}</p>
        </div>
      
    </div>
  )
}

export default Picture

