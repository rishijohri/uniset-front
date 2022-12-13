import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { TodoType } from '../../types'
// Define a type for the slice state



const initialState: TodoType[] = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    createTodoAction: (state, action: PayloadAction<TodoType>) => {
        state.push(action.payload)
    },
    deleteTodoAction: (state, action: PayloadAction<TodoType>) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id)
        if (index !== -1) {
        state.splice(index, 1)
        }
    },
    updateTodoAction: (state, action: PayloadAction<TodoType>) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id)
        if (index !== -1) {
        state[index] = action.payload
        }
    },
    readTodoAction: (state, action: PayloadAction<TodoType[]>) => {
        state = action.payload
    },
    },
})

export const { createTodoAction, deleteTodoAction, updateTodoAction, readTodoAction} = todoSlice.actions

export default todoSlice.reducer