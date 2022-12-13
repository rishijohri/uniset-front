import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { TodoState } from '../../types'
import { todoAPI } from '../../services'
// Define a type for the slice state


const intitalValue: TodoState = {
    createdAt: new Date(),
    createdBy: "effect",
    description: "empty",
    needsReminder: true,
    title: "created",
    id: 0
}

const initialState = [intitalValue]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => {
        state.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<TodoState>) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id)
        if (index !== -1) {
        state.splice(index, 1)
        }
    },
    updateTodo: (state, action: PayloadAction<TodoState>) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id)
        if (index !== -1) {
        state[index] = action.payload
        }
    },
    ListTodos: (state, action: PayloadAction<TodoState[]>) => {
        state = action.payload
    },
    },
})

export const { addTodo, removeTodo, updateTodo, ListTodos} = todoSlice.actions

export default todoSlice.reducer