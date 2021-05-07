import {useState} from "react"
import {useDispatch} from "react-redux"
import {addTodo} from "../Js/actions/TodoActions"

const AddTodo=()=>{
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const add=()=>{
        dispatch(addTodo({id:Date.now(),text:input,editable:false}))
    }  
    return(
        <div>
        <input type="text"
         value={input}
          onChange={e=>setInput(e.target.value)} />
        <button onClick={add} >Add</button>
         </div>
    )
}
export default AddTodo