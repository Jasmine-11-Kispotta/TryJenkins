import axios from "axios";

async function getUserTodos(){

    try {
        // debugger;
        const url = "http://localhost:4000/todo/getTodoItems"
        const token = sessionStorage["token"]

        const response = await axios.get(url,{
        headers : {
            token
        }
        });

    return response.data
    } catch (error) {
        console.log(error)
    }
    
}

async function addTodoItem(title, details){
    try {
        // debugger;
        const url = "http://localhost:4000/todo/createTodoItem"
        const payload = {
            title,
            details
        }
        const token = sessionStorage["token"]

        const response = await axios.post(url, payload, {
            headers: {
                token
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}



async function deleteItem(id){

   try {
    // debugger;
    const url = "http://localhost:4000/todo/deleteItem"
    const body ={
        itemId: id
    }
    const token = sessionStorage['token']
    const response = await axios.delete(url, {
            headers:{
                token
            },
            data:body
        })

    return response.data

   } catch (error) {
    console.log(error)
   }
}

export {
    getUserTodos,
    addTodoItem,
    deleteItem
}
