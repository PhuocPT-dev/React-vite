import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {

  const hoidanit = "Eric MU";
  const age = 25;
  const data = {
    address : "hanoi",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  //(key:value)
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo = {addNewTodo}/>
      <TodoData
        name = {hoidanit}
        age = {age}
        data = {data}
        
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' alt="React Logo" />
      </div>
    </div>
  )
}
export default App;