import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoSlice'
import categoryReducer from './reducers/categorySlice'


const rootReducer = combineReducers({
    todoReducer,
    categoryReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']