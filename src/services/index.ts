import { TodoState } from "../types";

function sleep(seconds: number) {
    return new Promise<void>((resolve, _reject) => {
        window.setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

const dummyTodos: TodoState[] = [
    {
        id: 1,
        createdAt: new Date(),
        createdBy: "anonymous-1",
        title: "Test TODO-1",
        description: "Hard Coded Description-1",
        needsReminder: false
    },
    {
        id: 2,
        createdAt: new Date(),
        createdBy: "anonymous-2",
        title: "Test TODO-2",
        description: "Hard Coded Description-2",
        needsReminder: true
    }
];

async function listTodos(): Promise<TodoState[]> {
    await sleep(2);
    return dummyTodos;
}

async function addTodo(todoItem: TodoState): Promise<TodoState["id"]> {
    await sleep(2);
    dummyTodos.push(todoItem);
    return todoItem.id;
}

async function updateTodo(id: TodoState["id"]): Promise<boolean> {
    await sleep(2);
    return true;
}

async function removeTodo(id: TodoState["id"]): Promise<boolean> {
    await sleep(2);
    return true;
}

const todoAPI = { listTodos, addTodo, updateTodo, removeTodo };

export { todoAPI };
