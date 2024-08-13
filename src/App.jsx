import React, { useRef, useState } from 'react'

const App = () => {

const [val, setVal] = useState({name :"",age : ""});

const handleSubmit = (details)=>{
  details.preventDefault();
 console.log(val);
 
  
}
  return (
    
    <>
    <div className='p-4 bg-zinc-500 flex gap-10 w-full h-screen '>
    <form action="" onSubmit={handleSubmit}>
      <input onChange={(event)=>setVal({...val, name :event.target.value})} className=' border-solid flex mb-6  rounded-md px-3 text-red' type="text" placeholder='Name' />
      <input onChange={(event)=>setVal({...val, age :event.target.value})} className='border-solid flex mb-6  rounded-md px-3' type="number" placeholder='Age' />
      <button className='bg-blue-500 rounded-md px-3 py-1 text-white'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default App