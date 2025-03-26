import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../types/types";

interface CategoryState {
    categories: ICategory[],
    isLoading: boolean;
    error: string;
}

const initialState: CategoryState = {
    categories: [
        {
            id: 1,
            title: 'Проект 1'
        },
        {
            id: 2,
            title: 'Проект 2'
        },
        {
            id: 3,
            title: 'Проект 3'
        },

    ],
    isLoading: false,
    error: ''
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoriesFetching(state) {
            state.isLoading = true;
        },
        categoriesFetchingSuccess(state, action: PayloadAction<ICategory[]>) {
            state.isLoading = true;
            state.error = '';
            state.categories = action.payload
        },
        categoriesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addCategory(state, action: PayloadAction<ICategory>) {
            state.categories = [...state.categories, action.payload]
        }, 
        deletecategory(state, action: PayloadAction<number>) {
            const updateCategories = state.categories.filter(category => category.id !== action.payload)
            state.categories = updateCategories
        },
    }
})

export default categorySlice.reducer