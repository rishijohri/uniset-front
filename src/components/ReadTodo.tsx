import React, {useEffect} from "react";
import { TodoType } from "../types";
import { TodoAPI } from "../services";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import useReadTodo from "../hooks/useReadTodo";
function ReadTodo() {
    const todos = useAppSelector((state: RootState) => state.todo);
    useReadTodo();
    return (
        <div>
            <ul>
                {todos.map((todo: TodoType) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReadTodo