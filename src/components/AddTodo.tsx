import React, {ButtonHTMLAttributes } from "react";
import { TodoState } from "../types";
import { todoAPI } from "../services";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addTodo, removeTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const dispatch = useDispatch();
    const AddHandler = () => {
        const todo: TodoState = {
        id: 3,
        title: "test",
        description: "test",
        needsReminder: false,
        createdAt: new Date(),
        createdBy: "test",
        };
        todoAPI.addTodo(todo).then((response) => {
            console.log(response);
            dispatch(addTodo(todo));
        });
    }
    return (
        <button onClick={AddHandler}>Add</button>
    );
}

export default AddTodo