// import { FC } from 'react'
// import { ICategory, ITodo } from '../../types/types'
// import TodoItem from './TodoItem';

// interface TodoItemsProps {
//     todos: ITodo[];
//     categories: ICategory[];
//     onUpdateTodo: (id: number, updatedFields: Partial<ITodo>) => void;
//     onDeleteTodo: (id: number) => void;
// }

// const TodoItems: FC<TodoItemsProps> = ({
//         todos,
//         onUpdateTodo,
//         onDeleteTodo, 
//     }) => {
    
//     return (
//         <div>
//             <h1 className="todo-title">Your ToDo</h1>
//             {todos.map(todo => (
//                 <div key={todo.id} className='todo-list__content-body'>    
//                         <TodoItem
//                             key={todo.id}
//                             todo={todo}
//                             onUpdateTodo={onUpdateTodo}
//                             onDeleteTodo={onDeleteTodo}
//                         />
//                 </div>
//             ))
//             }
//         </div>
//     )
// }
// export default TodoItems;

import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { ICategory, ITodo } from '../../types/types';
import TodoItem from './TodoItem';

interface TodoItemsProps {
    todos: ITodo[];
    categories: ICategory[];
    onUpdateTodo: (id: number, updatedFields: Partial<ITodo>) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoItems: FC<TodoItemsProps> = ({
    todos,
    onUpdateTodo,
    onDeleteTodo, 
}) => {
    return (
        <Box sx={{ 
            borderRadius: '10px',

        }}>
            <Typography variant="h4" align="center" gutterBottom>
                Your Reports
            </Typography>
            {todos.map(todo => (
                <Box key={todo.id} sx={{ mb: 1 }}>    
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdateTodo={onUpdateTodo}
                        onDeleteTodo={onDeleteTodo}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default TodoItems;