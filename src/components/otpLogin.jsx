import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {callOnOtpLogin} from '../services/user'
import { toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function Otp(){

    const [otp, setOtp] = useState("")

const navigate = useNavigate()
const location = useLocation()
const email = location.state

var onOtpLogin = async ()=>{
    if(otp.length === 0)
        toast.error("otp is required!")
    else{
        const result = await callOnOtpLogin(email, otp)

        if(result.success === false)
            toast.error(result.message)
        else{
            toast.success(result.message)

            const token = result.data.token;
            sessionStorage.setItem("token", token)
            
            navigate('/home')
            
        }
    }
}
    return (
        <div className='container'>
            <div className='text-center'>
                <label className='m-5'>Enter otp: </label>
                
                <input className='m-5' type="number" onChange={(e)=> {setOtp(e.target.value)}}></input>
                
                <br />
            
            <Link className='btn btn-success mt-3' onClick={onOtpLogin}>Login</Link>
            </div>
        </div>
        

    )
}

export default Otp