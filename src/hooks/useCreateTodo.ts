import React, {useState, useEffect} from "react";
import { TodoAPI } from "../services";
import { useAppDispatch } from "../app/hooks";
import { createTodoAction } from "../features/todo/todoSlice";
import { TodoType } from "../types";

export default function useCreateTodo() {
    const [todo, setTodo] = useState<TodoType[]>([]);
    const dispatch = useAppDispatch();
    
    const AddHandler = (todo_item: TodoType) => {
        const response = TodoAPI.createTodo(todo_item);
        // do business logic here
        try {
            Promise.all([
                TodoAPI.createTodo(todo_item),
                (response: TodoType) => {
                    //do business logic here
                    return response;
                },
                dispatch(createTodoAction(todo_item))
            ])
        } catch (error) {
            console.log(error);
        }
        
    }

    return AddHandler;
}
