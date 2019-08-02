import React from "react"
import todoData from "./todoData";

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox"
                checked={props.taco.completed}
                onChange={(event) => props.handleChange(props.taco.id)} />
            <p>{props.taco.task}</p>
        </div>
    )
}

export default TodoItem