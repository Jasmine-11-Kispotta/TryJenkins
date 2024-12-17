import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { callOnLogin } from '../services/user'

function Login(){

const [email, setEmail] = useState("")


const navigate = useNavigate()

var onLogin = async () => {
    if(email.length === 0)
        toast.error("email is required!")
    else{
        const result = await callOnLogin(email)

        if(result.success === false)
            toast.error(result.message)
        else{
            toast.success(result.message)
            
            navigate('/otpLogin', {state: email})
            
        }
            

    }
}

    return (
        <div className="container">
            <h1>Login Here</h1>
            <table className="table mt-5 ">
                <tbody>
                    <tr>
                        <td>Enter your email: </td>
                        <td>
                            <input onChange={(e) => {setEmail(e.target.value)}}  type="text" ></input>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <div>
                Don't have an account? <Link to="/register">Register Here</Link>
            </div>
            <div>
                 <Link to="/">Forget Password</Link>
            </div>
            <Link className='btn btn-success mt-3' onClick={onLogin}>Login</Link>
        </div>
    )
    
}



export default Login