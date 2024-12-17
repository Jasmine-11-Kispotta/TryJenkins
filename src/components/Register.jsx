import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { callOnRegister } from '../services/user'




function Register(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");


    const navigate = useNavigate()

    const onRegister = async() => {
        if(firstName.length === 0 || lastName.length === 0 || email.length === 0 || phoneno.length === 0 || password.length === 0 || confirmpassword.length === 0)
            toast.error("all fields are required!")
        
        else if(password !== confirmpassword)
            toast.warning("password doesn't match!")

        else{
            const result = await callOnRegister(firstName, lastName, email, phoneno, password)

            if(result.success === false){
                toast.error(result.message)
            }
            else{
                toast.success(result.message)

                navigate('/login')
            }

                
        }
        

    }


    return (
        <div className="container">
            <h1>Register Here</h1>
            <table className="table mt-5 ">
                <tbody>
                    <tr>
                        <td>Enter first name: </td>
                        <td>
                            <input onChange={(e) =>setFirstName(e.target.value)} type="text" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter last name: </td>
                        <td>
                        <input onChange={(e) =>setLastName(e.target.value)} type="text" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter email: </td>
                        <td>
                        <input onChange={(e) =>setEmail(e.target.value)} type="email" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter phone no.: </td>
                        <td>
                        <input onChange={(e) =>setPhoneno(e.target.value)} type="text" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td >Enter password: </td>
                        <td>
                        <input onChange={(e) =>setPassword(e.target.value)} type="password" ></input>
                        </td>
                    </tr>
                    <tr>
                        <td >Confirm password: </td>
                        <td>
                        <input onChange={(e) =>setConfirmPassword(e.target.value)} type="password" ></input>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-success' onClick={onRegister}>Register</button>
        </div>
    )
    
}


export default Register