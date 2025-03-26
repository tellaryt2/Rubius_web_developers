// import { FC, useState } from 'react';
// import "./todo.css";
// import { ICategory, ITodo } from '../../types/types';

// interface TodoCreatedPanelProps {
//     categories: ICategory[];
//     onAddTodo: (todo: ITodo) => void;
// }

// const TodoCreatedPanel: FC<TodoCreatedPanelProps> = ({ onAddTodo, categories }) => {
//     const [newTodo, setNewTodo] = useState({
//         description: "",
//         date: "",
//         category: categories[0] 
//     });

//     const createNewTodo = () => {
//         if (!newTodo.description.trim()) {
//             alert("Description cannot be empty!");
//             return;
//         }

//         const newTodoData: ITodo = {
//             id: Date.now(), 
//             date: newTodo.date,
//             description: newTodo.description,
//             category: newTodo.category.title, 
//         };

//         onAddTodo(newTodoData);
//         setNewTodo({ 
//             date: "", 
//             description: "",  
//             category: categories[0] 
//         });
//     };

//     const handleCategoryChange = (title: string) => {
//         const selectedCategory = categories.find(cat => cat.title === title);
//         if (selectedCategory) {
//             setNewTodo({ ...newTodo, category: selectedCategory });
//         }
//     };

//     return (
//         <div>
//             <h1 className="todo-title">ToDo List</h1>
//             <div className="todo-inputs">
//                 <input
//                     className="todo-input"
//                     type="text"
//                     placeholder="add your ToDo Description"
//                     value={newTodo.description}
//                     onChange={(e) =>
//                         setNewTodo({ ...newTodo, description: e.target.value })
//                     }
//                 />

//                 <input
//                     className="todo-input"
//                     type="date"
//                     value={newTodo.date}
//                     onChange={(e) => setNewTodo({ ...newTodo, date: e.target.value })}
//                 />
                
//                 <select
//                     className="todo-input"
//                     value={newTodo.category.title}
//                     onChange={(e) => handleCategoryChange(e.target.value)}
//                 >
//                     {categories.map((category) => (
//                         <option key={category.id} value={category.title}>
//                             {category.title}
//                         </option>
//                     ))}
//                 </select>

//                 <div className='red-input' onClick={createNewTodo}>+</div>
//             </div>
//         </div>
//     );
// };

// export default TodoCreatedPanel;

import { 
    Box, 
    TextField, 
    Select, 
    MenuItem, 
    IconButton, 
    Typography 
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FC, useState } from 'react';
import { ICategory, ITodo } from '../../types/types';

interface TodoCreatedPanelProps {
    categories: ICategory[];
    onAddTodo: (todo: ITodo) => void;
}

const TodoCreatedPanel: FC<TodoCreatedPanelProps> = ({ onAddTodo, categories }) => {
    const [newTodo, setNewTodo] = useState({
        description: "",
        date: "",
        category: categories[0] 
    });

    const createNewTodo = () => {
        if (!newTodo.description.trim()) {
            alert("Description cannot be empty!");
            return;
        }

        const newTodoData: ITodo = {
            id: Date.now(), 
            date: newTodo.date,
            description: newTodo.description,
            category: newTodo.category.title, 
        };

        onAddTodo(newTodoData);
        setNewTodo({ 
            date: "", 
            description: "",  
            category: categories[0] 
        });
    };

    const handleCategoryChange = (title: string) => {
        const selectedCategory = categories.find(cat => cat.title === title);
        if (selectedCategory) {
            setNewTodo({ ...newTodo, category: selectedCategory });
        }
    };

    return (
        <Box>
            <Typography variant="h4" align="center" gutterBottom>
                Report List
            </Typography>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                p: 2,
                backgroundColor: 'rgb(215, 233, 248)',
                borderRadius: '10px',
                gap: 1,
                mb: '20px'
            }}>
                <TextField
                    variant="outlined"
                    placeholder="Add your ToDo Description"
                    value={newTodo.description}
                    onChange={(e) =>
                        setNewTodo({ ...newTodo, description: e.target.value })
                    }
                    sx={{m: '5px', borderRadius: '50px'}}
                />

                <TextField
                    type="date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    value={newTodo.date}
                    onChange={(e) => setNewTodo({ ...newTodo, date: e.target.value })}
                    sx={{m: '5px'}}
                />
                
                <Select
                    value={newTodo.category.title}
                    onChange={(e) => handleCategoryChange(e.target.value as string)}
                    sx={{m: '5px'}}
                >
                    {categories.map((category) => (
                        <MenuItem key={category.id} value={category.title}>
                            {category.title}
                        </MenuItem>
                    ))}
                </Select>

                <IconButton 
                    onClick={createNewTodo}
                    sx={{ 
                        alignSelf: 'flex-end',
                        color: 'error.main'
                    }}
                >
                    <AddCircleIcon fontSize="large" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default TodoCreatedPanel;