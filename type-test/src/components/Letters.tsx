import React from 'react'

export default function Letters({word}:any) {
    var splitWord = word.split('') 

  return (
    <div className='flex'>
      {splitWord.map((letter:string) => (
        <div>{letter}</div>
      ))}
    </div>
  )
}
