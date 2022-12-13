import React, {useState, useEffect} from "react";
import { TodoAPI } from "../services";
import { useAppDispatch } from "../app/hooks";
import { createTodoAction } from "../features/todo/todoSlice";
import { TodoType } from "../types";

export default async function useCreateTodo(todo_item: TodoType) {
    const [todo, setTodo] = useState<TodoType[]>([]);
    const dispatch = useAppDispatch();
    const response = await TodoAPI.createTodo(todo_item);
    // do business logic here
    dispatch(createTodoAction(todo_item));
    return todo;
}
