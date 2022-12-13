import React, {} from "react";
import { TodoType } from "../types";
import useCreateTodo from "../hooks/useCreateTodo";

function CreateTodo() {
    const AddHandler = () => {
        const todo_item: TodoType = {
        id: 3,
        title: "test",
        description: "test",
        needsReminder: false,
        createdAt: new Date(),
        createdBy: "test",
        };
        useCreateTodo(todo_item);
    }
    return (
        <button onClick={AddHandler}>Add</button>
    );
}

export default CreateTodo