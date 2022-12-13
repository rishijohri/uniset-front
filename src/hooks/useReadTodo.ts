import React, {useState, useEffect} from "react";
import { TodoAPI } from "../services";
import { useAppDispatch } from "../app/hooks";
import { readTodoAction } from "../features/todo/todoSlice";
import { TodoType } from "../types";

export default async function useReadTodo() {
    const dispatch = useAppDispatch();
    useEffect( () => {
        const response = TodoAPI.readTodo().then((response) => {
            dispatch(readTodoAction(response));
        });
    }, []);
    return;
}