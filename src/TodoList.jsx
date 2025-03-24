import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() , isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    // console.log("hello");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() ,isDone: false}]
        });
        setNewTodo("");
        // console.log("inside todos");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
        // console.log("inside newtodos");

    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let markAsDone =(id) => {
        setTodos((prevTodos)=>(
            prevTodos.map((todo) => {
                if(todo.id == id ){
                return {
                    ...todo,
                    // task: todo.task.toUpperCase(),
                    isDone : true,
                };
            } else {
                return todo;
            }
            })
        ));
    };

    let markAllDone = () => {
        setTodos((prevTodos)=>(
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    // task: todo.task.toUpperCase(),
                    isDone: true,
                };
            })
        ));
    };

    

    return (

        <div  className="todo-container">
            <input className="task-input" placeholder="add a task"
                value={newTodo} onChange={updateTodoValue}></input>

            <br></br>
            <button className="add-btn" onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span className={`task-text `} style={todo.isDone? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>delete</button>
                            &nbsp;&nbsp;&nbsp;
                            <button className="done-btn" onClick={() => markAsDone(todo.id)}>Mark as done</button>

                        </li>
                    ))
                }
            </ul>

            <br></br>
            <button className="mark-all" onClick={markAllDone }>Mark All As Done</button>
        </div>
    );
}