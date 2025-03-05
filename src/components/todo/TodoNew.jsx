import { useState } from "react"

const TodoNew = (props) => {

    //useState hook
    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props

    const handleClick = (name) => {
        console.log(">>> check valueInput : ",valueInput);

    }
    //cách 1
    // const handleOnChange = (event) => {
    //     console.log(">>> handleOnChange", event.target.value);

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => {handleOnChange(event.target.value)}}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
                
            >Add</button>
            <div>My text input is = {valueInput}</div>
        </div>
    )
}

export default TodoNew;