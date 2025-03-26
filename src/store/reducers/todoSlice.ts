import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types";

interface TodoState {
    todos: ITodo[],
    isLoading: boolean;
    error: string;
}

const initialState: TodoState = {
    todos: [
        {
            id: 1,
            date: '2025-03-25',
            description: 'Added several commits',
            category: 'Проект 3'
        },
        {
            id: 2,
            date: '2025-03-25',
            description: 'Checked Email',
            category: 'Проект 2'
        },
        {
            id: 3,
            date: '2025-03-25',
            description: 'Sent message teamlead',
            category: 'Проект 1'
        },
    ],
    isLoading: false,
    error: ''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todosFetching(state) {
            state.isLoading = true;
        },
        todosFetchingSuccess(state, action: PayloadAction<ITodo[]>) {
            state.isLoading = true;
            state.error = '';
            state.todos = action.payload
        },
        todosFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        todoAdd(state, action: PayloadAction<ITodo>) {
            state.todos = [...state.todos, action.payload]
        }, 
        deleteTodo(state, action: PayloadAction<number>) {
            const updateTodos = state.todos.filter(todo => todo.id !== action.payload)
            state.todos = updateTodos
        },
        editTodo(state, action: PayloadAction<{ id: number; updatedFields: Partial<ITodo> }>) {
            const { id, updatedFields } = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            if (index !== -1) {
              state.todos[index] = { ...state.todos[index], ...updatedFields };
            }
        },
    }
})

export default todoSlice.reducer