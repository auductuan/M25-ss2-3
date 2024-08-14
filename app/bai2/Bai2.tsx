import { faAngleUp, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Bai2() {
  return (
    <>
    <div>Bai2</div>
     <div className='pl-4,text-sm'>Input label</div>
     <div style={{border:'blue solid 1px', width:'280px', borderRadius:'5px', padding:'10px', display:"flex", justifyContent:"space-between"} }> 
     <FontAwesomeIcon style={{width:"17px"}} icon={faClock}></FontAwesomeIcon>
     <FontAwesomeIcon style={{width:"17px"}} icon={faAngleUp}></FontAwesomeIcon></div>
     <div style={{border:'gray solid 1px',width:'280px', borderRadius:'5px' , marginTop:'2px'}}>
        <div className='mt-2 ml-2 flex justify-between '><div>Label</div> <input type="checkbox" className='mr-4'/></div>
        <div className='mt-2 ml-2 flex justify-between'><div>Label</div> <input type="checkbox" className='mr-4'/></div>
        <div className='mt-2 ml-2 flex justify-between'><div>Label</div> <input type="checkbox" className='mr-4'/></div>
        <div className='mt-2 ml-2 flex justify-between'><div>Label</div> <input type="checkbox" className='mr-4'/></div>
        <div className='flex justify-around p-3 '>   
        <div style={{border:'solid 1px black', padding: '3px', borderRadius:'4px', width:'50px', height:'40px'}}>Clear</div>
        <div className='bg-blue-500 p-2 rounded w-30 h-10'>Apply</div>
        </div>
     </div>
    </>
  )
}
