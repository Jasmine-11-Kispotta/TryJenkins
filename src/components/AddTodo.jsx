import { toast } from "react-toastify"
import { addTodoItem } from "../services/todo"
import 'react-toastify/ReactToastify.css'

const { useState } = require("react")

function AddTodo(){

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')


    var save = async ()=>{
       const result =  await addTodoItem(title, details)

       if(result.success === false)
            toast.error(result.message)
       else{
            toast.success(result.message)
       }
    }   



    return(
        <div className='container'>
            <h1 className="mt-5">Add a todo</h1>
            <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
            <table className="table">
                <tbody >

                    <tr>
                        <td>Enter title: </td>
                        <td>
                            <input onChange={(e)=> {setTitle(e.target.value)}} type="text"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter details: </td>
                        <td>
                            <input onChange={(e) => {setDetails(e.target.value)}} type="text"></input>
                        </td>
                    </tr>

                </tbody>
            </table>
            <button onClick={save} className="btn btn-success">Save</button>
            </div>
            <div className="col-3"></div>
            </div>
        </div>
    )
}


export default AddTodo