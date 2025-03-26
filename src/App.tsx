import './index.css'

import TodoList from "./components/Todo/TodoList"
import { ITodo } from "./types/types"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { todoSlice } from "./store/reducers/todoSlice"

function App() {

  const {todos} = useAppSelector(state => state.todoReducer)

  const { categories } = useAppSelector(state => state.categoryReducer)

  const dispatch = useAppDispatch()

  const { todoAdd, deleteTodo, editTodo } = todoSlice.actions;

  const createTodo = (newTodo: ITodo) => {
    dispatch(todoAdd(newTodo));
  };

  const removeTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const updateTodo = (id: number, updatedFields: Partial<ITodo>) => {
    dispatch(editTodo({ id, updatedFields }));
  };
  return (
    <div>
      <TodoList 
          todos={todos} 
          categories={categories}
          onAddTodo={createTodo}
          onUpdateTodo={updateTodo}
          onDeleteTodo={removeTodo}
      />
    </div>
  )
}

export default App
