import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Bai3() {
    return (
        <>
            <div>Bai3</div>
            <div style={{ fontSize: '22px', fontWeight: 500 }}><h1>Form Sign Up</h1></div><br />
            <div>Name:</div>
            <div style={{ border: 'gray solid 1px', width: '290px', height: '40px', borderRadius: '5px', padding: '9px', fontSize: 13, color: 'gray' }}>Your Name</div>
            <div>Email:</div>
            <div style={{ border: 'gray solid 1px', width: '290px', height: '40px', borderRadius: '5px', padding: '9px', fontSize: 13, color: 'gray' }}>you@company.com</div>
            <div>Phone Number:</div>
            <div style={{ border: 'gray solid 1px', width: '290px', height: '40px', borderRadius: '5px', padding: '9px', fontSize: 13, color: 'gray', display: "flex" }}>US
                <FontAwesomeIcon style={{ width: "17px", color: "black", marginLeft: "3px" }} icon={faAngleDown}></FontAwesomeIcon>
                <div style={{ marginLeft: "18px" }}>+84(123) 456 789</div>
            </div>
            <div>Address:</div>
            <div style={{ border: 'gray solid 1px', width: '290px', height: '100px', borderRadius: '5px', padding: '9px', fontSize: 13, color: 'gray' }}>Tell us a little about the project...</div>
            <div>Skill:</div>
                <div>
                    <tr>
                        <td> <input type="checkbox" className='mr-4' />HTML</td>
                        <td> <input type="checkbox" className='mr-4' />Javascript</td>
                    </tr>
                </div>
                <div>
                    <tr>
                        <td> <input type="checkbox" className='mr-4' />UX Design</td>
                        <td> <input type="checkbox" className='mr-4' />React JS</td>
                    </tr>
                </div>
                <div>
                    <tr>
                        <td> <input type="checkbox" className='mr-4' />CSS</td>
                        <td> <input type="checkbox" className='mr-4' />Java</td>
                    </tr>
                </div>
            <div style={{backgroundColor:'blue', width:'80px', borderRadius:'5px', padding:'9px'}}>Sign up</div>
        </>
    )
}
