import { faEye, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function bai1() {
  return (
    <>
    <div>Bai 1 </div>
    <div className='text-blue-700'>Label</div>
    <div style={{border:'blue solid 1px', width:'250px', borderRadius:'5px', display:'flex', justifyContent:'space-between', padding:'8px'} }>Placeholder <FontAwesomeIcon style={{width:"17px"}} icon={faEye}></FontAwesomeIcon></div>
    <div className='text-stone-600'>Helper Text</div>
    </>
  )
}
