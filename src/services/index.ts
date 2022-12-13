import { TodoType } from "../types";

function sleep(seconds: number) {
    return new Promise<void>((resolve, _reject) => {
        window.setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

const dummyTodos: TodoType[] = [
    {
        id: 1,
        createdAt: Date(),
        createdBy: "anonymous-1",
        title: "Test TODO-1",
        description: "Hard Coded Description-1",
        needsReminder: false
    },
    {
        id: 2,
        createdAt: Date(),
        createdBy: "anonymous-2",
        title: "Test TODO-2",
        description: "Hard Coded Description-2",
        needsReminder: true
    }
];

async function readTodo(): Promise<TodoType[]> {
    await sleep(2);
    return dummyTodos;
}

async function createTodo(todoItem: TodoType): Promise<TodoType["id"]> {
    await sleep(2);
    dummyTodos.push(todoItem);
    return todoItem.id;
}

async function updateTodo(id: TodoType["id"]): Promise<boolean> {
    await sleep(2);
    return true;
}

async function deleteTodo(id: TodoType["id"]): Promise<boolean> {
    await sleep(2);
    return true;
}

const TodoAPI = { readTodo, createTodo, updateTodo, deleteTodo };

export { TodoAPI };
