import React, {useEffect} from "react";
import { TodoState } from "../types";
import { todoAPI } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { ListTodos } from "../features/todo/todoSlice";
function ListTodo() {
    const dispatch = useDispatch();
    const todos = useSelector((state: any) => state.todo);
    useEffect(() => {
        todoAPI.listTodos().then((response) => {
            // do any processing here
            dispatch(ListTodos(response));
        }
        )
    }, []);           
    return (
        <div>
            <ul>
                {todos.map((todo: TodoState) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListTodo