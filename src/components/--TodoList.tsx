import React from "react";
import { todoType } from "../interfaces/interfaces";

type TodoListProps = {
    todos: todoType[]
}

export const TodoList: React.FC<TodoListProps> = (props) => {

    const list = props.todos.map((el, id)=>{
        return (
            <p key={id}>{el.title}</p>
        )
    })

    return (
        <>
            <h1>TodoList</h1>
            <hr />
            {list}
        </> 
    )
}