import {useEffect} from "react";
import { TodoAPI } from "../services";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { readTodoAction } from "../features/todo/todoSlice";


export default function useReadTodo() {
    const todo = useAppSelector((state: RootState) => state.todo);
    const dispatch = useAppDispatch();
    useEffect( () => {
        TodoAPI.readTodo()
        .then((response) => {
            dispatch(readTodoAction(response));
        });
    }, []);
    return todo;
}