import {useEffect} from "react";
import { TodoAPI } from "../services";
import { useAppDispatch } from "../app/hooks";
import { readTodoAction } from "../features/todo/todoSlice";
import { TodoType } from "../types";

export default async function useReadTodo() {
    const dispatch = useAppDispatch();
    useEffect( () => {
        try {
            Promise.all([
                TodoAPI.readTodo(),
                (response: TodoType[]) => {
                    //do business logic here
                    dispatch(readTodoAction(response));
                    return response;
                },
                
            ])
        } catch (error) {
            console.log(error);
        }
        

    }, []);
    return;
}