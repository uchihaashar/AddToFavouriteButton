import React from 'react'

const Card = ({data, handleClick , index}) => {

  const {image, Name, animeName, added}=data;
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-3 pb-10 relative mt-10'>
     <div className='w-20 h-20 bg-orange-600 rounded-md'>
      <img className='w-full h-full object-cover overflow-hidden' src={image} alt="" /> </div>
     <div>
      <h3 className='text-xl leading-none font-semibold'>{Name}</h3>
      <h5 className='text-sm'>{animeName}</h5>
     </div>
     <button onClick={()=>handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${added===false ? "bg-orange-600" : "bg-teal-500"} absolute text-white text-xs left-1/2 bottom-0 -translate-x-[50%] translate-y-[50%] rounded-full`}>{added===false ? "Add to favourite " : "Added" }</button>
    </div>
  )
}

export default Card