import React from 'react'
import Letters from './Letters'

export default function Word({data}:any) {

  return (
    <div className='grid grid-col-12'>
      {data.map((word:string)=>(
        <Letters word={word}/>
      ))}
    </div>
  )
}
