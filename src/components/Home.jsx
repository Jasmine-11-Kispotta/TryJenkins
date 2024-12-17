import {toast} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

import { useEffect, useState } from 'react';
import {  getUserTodos, deleteItem } from '../services/todo';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/user';

function Home(){
    // toast.success("welcome home!");

    const [todoItems, setTodoItems] = useState([])


    async function onLoadTodoItems(){
        const result = await getUserTodos()

        if(result.success === false)
            toast.error(result.message)
        else{
            setTodoItems(result.data)
        }
    }

    useEffect(() => {
        onLoadTodoItems()
    }, [])


    const navigate = useNavigate()

    var addItem = async() => {
        navigate('/addTodo')
    }


    function logout() {
    
            sessionStorage.clear()
            navigate('/login')
            
    }

    return(

        <div className='container-fluid'>

            <h1>Your Todos</h1>

            <table className='table'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>title</th>
                            <th>details</th>
                            <th>status</th>
                            <th>Actions</th>
                            <th>Time created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoItems.map((item, index) => {
                            return(
                                <tr key={index || item.id}>
                                    <td>{index}</td>
                                    <td>{item['title']}</td>
                                    <td>{item['details']}</td>
                                    <td>{item['status']}</td>
                                    <td>
                                        {item['isPublic'] === 0 && (
                                            <button className='btn btn-warning ms-3'>Make Public </button>
                                        )}

                                        {item['isPublic'] === 1 && (
                                            <button className='btn btn-warning ms-3'>Make Private </button>
                                        )}
                                    </td>
                                    <td>{item['createdTimestamp']}</td>
                                    <td>
                                    <button className='btn btn-danger ms-3' onClick={async()=>{
                                        const result = await deleteItem(item.id)

                                        if(result.success === false)
                                            toast.error(result.message)
                                        else{
                                            toast.success(result.message)
                                        }
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                            
                        }
                    </tbody>
            </table>
            <button className='btn btn-success ms-3' onClick={addItem}>Add item</button>

            <button className='btn btn-success ms-3' onClick={logout}>Logout</button>
        </div>
    )
}

export default Home