const TodoData = (props) => {
    //props là một object {}
    // {
    //     name: "Eric",
    //     age : 25,
    //     date : {}
    // }

    //cú pháp destructuring data
    const {name, age , date} = props 
    // cách 2
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    console.log(">>> check props: ", props);
    return (
        <div className='todo-text'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
      </div>
    )
}

export default TodoData;