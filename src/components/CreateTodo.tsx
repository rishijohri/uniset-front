import React, {} from "react";
import { TodoType } from "../types";
import useCreateTodo from "../hooks/useCreateTodo";

function CreateTodo() {
    const AddHandler = useCreateTodo()
    const todo_item: TodoType = {
        id: 3,
        title: "test",
        description: "test",
        needsReminder: false,
        createdAt: Date(),
        createdBy: "test",
        };
    
    return (
        <button onClick={() => {
            AddHandler(todo_item);
        }}>Add</button>
    );
}

export default CreateTodo