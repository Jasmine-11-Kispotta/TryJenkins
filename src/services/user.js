import axios from 'axios'
import { useNavigate } from 'react-router-dom'

async function callOnRegister(firstname, lastname, email, phone, password){
    // debugger;
    const url = "http://localhost:4000/user/register"

    const body={
        firstname,
        lastname,
        email,
        phone,
        password
    }

    const response = await axios.post(url, body)

    // if(response.data.length == 0)
    //     return 
    console.log(response)
    console.log(response["data"]["message"])

    return response.data
    
}


async function callOnLogin(email){
    const url = "http://localhost:4000/user/login"
    const body = {email}

    const response = await axios.post(url, body)

    return response.data
}


async function callOnOtpLogin(email, otp){
    // debugger;
    const url = "http://localhost:4000/user/verifyOtp"
    const body = {
        email,
        otp
    }

    const response = await axios.post(url, body)

    console.log(response)

    return response.data
}



export {callOnRegister, callOnLogin, callOnOtpLogin}