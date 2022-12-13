import React, {useEffect} from "react";
import { TodoType } from "../types";
import useReadTodo from "../hooks/useReadTodo";
function ReadTodo() {
    const todo = useReadTodo();
    return (
        <div>
            <ul>
                {todo.map((todo: TodoType) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReadTodo