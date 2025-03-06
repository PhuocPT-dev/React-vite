const TodoData = (props) => {


    //cú pháp destructuring data
    const { todoList } = props

    console.log(">>> check props: ", todoList);
    return (
        <div className='todo-text'>
            {todoList.map((item, index) => {
                console.log(">>>check map:", item, index);
                return (
                    <div className={`todo-item`} key={item.id}  >
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>)
            })}
        </div>
    )
}

export default TodoData;