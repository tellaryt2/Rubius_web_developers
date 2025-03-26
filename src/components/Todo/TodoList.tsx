// import { FC, useEffect, useMemo, useState } from "react";
// import "./todo.css";
// import { ITodo, ICategory } from "../../types/types";
// import TodoCreatedPanel from "./TodoCreatedPanel";
// import TodoItems from "./TodoItems";

// interface TodoListProps {
//     todos: ITodo[];
//     categories: ICategory[];
//     onAddTodo: (todo: ITodo) => void;
//     onUpdateTodo: (id: number, updatedFields: Partial<ITodo>) => void;
//     onDeleteTodo: (id: number) => void;
// }

// const TodoList: FC<TodoListProps> = ({
//         todos,
//         categories,
//         onAddTodo,
//         onUpdateTodo,
//         onDeleteTodo,
//     }) => {

//     const [actualTodos, setActualTodos] = useState<ITodo[]>(todos)

//     const [searchTitle, setSearchTitle] =useState('')

//     const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

//     const [currentPage, setCurrentPage] = useState(1);

//     const todosPerPage = 5;

//     useEffect(() => {
//         setActualTodos(todos);
//         setCurrentPage(1);
//     }, [todos]);

//     const filteredTodos = useMemo(() => {
//         let result = actualTodos.filter((todo) =>
//             todo.description.toLowerCase().includes(searchTitle.toLowerCase())
//         );

//         result = [...result].sort((a, b) => {
//             const compare = a.description.localeCompare(b.description);
//             return sortDirection === 'asc' ? compare : -compare;
//         });

//         return result;
//     }, [actualTodos, searchTitle, sortDirection]);

//     const indexOfLastTodo = currentPage * todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);
//     const totalPages = Math.ceil(filteredTodos.length / todosPerPage);

//     const toggleSortDirection = () => {
//         setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
//     };

//     const paginate = (pageNumber: number) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <div className="container">
//            <TodoCreatedPanel onAddTodo={onAddTodo} categories={categories}/>

//            <div className="todo-find">
//                 <input 
//                     type="text" 
//                     placeholder="search todo" 
//                     value={searchTitle}
//                     onChange={e => setSearchTitle(e.target.value)}
//                 />

//                 <button 
//                     className="sort-button"
//                     onClick={toggleSortDirection}
//                 >
//                     Sort {sortDirection === 'asc' ? '↓ Desc' : '↑ Asc'}
//                 </button>
//            </div>

//            <TodoItems 
//                 todos={currentTodos} 
//                 categories={categories}
//                 onUpdateTodo={onUpdateTodo}
//                 onDeleteTodo={onDeleteTodo}
//             />


//             {filteredTodos.length > todosPerPage && (
//                 <div className="pagination">
//                     <button 
//                         onClick={() => paginate(currentPage - 1)} 
//                         disabled={currentPage === 1}
//                     >
//                         Previous
//                     </button>
                    
//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
//                         <button
//                             key={number}
//                             onClick={() => paginate(number)}
//                             className={currentPage === number ? 'active' : ''}
//                         >
//                             {number}
//                         </button>
//                     ))}
                    
//                     <button 
//                         onClick={() => paginate(currentPage + 1)} 
//                         disabled={currentPage === totalPages}
//                     >
//                         Next
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TodoList;


import { Container, TextField, Button, Box, Pagination, Stack } from '@mui/material';
import { FC, useEffect, useMemo, useState } from "react";
import { ITodo, ICategory } from "../../types/types";
import TodoCreatedPanel from "./TodoCreatedPanel";
import TodoItems from "./TodoItems";

interface TodoListProps {
    todos: ITodo[];
    categories: ICategory[];
    onAddTodo: (todo: ITodo) => void;
    onUpdateTodo: (id: number, updatedFields: Partial<ITodo>) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({
    todos,
    categories,
    onAddTodo,
    onUpdateTodo,
    onDeleteTodo,
}) => {
    const [actualTodos, setActualTodos] = useState<ITodo[]>(todos);
    const [searchTitle, setSearchTitle] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const todosPerPage = 5;

    useEffect(() => {
        setActualTodos(todos);
        setCurrentPage(1);
    }, [todos]);

    const filteredTodos = useMemo(() => {
        let result = actualTodos.filter((todo) =>
            todo.description.toLowerCase().includes(searchTitle.toLowerCase())
        );

        result = [...result].sort((a, b) => {
            const compare = a.description.localeCompare(b.description);
            return sortDirection === 'asc' ? compare : -compare;
        });

        return result;
    }, [actualTodos, searchTitle, sortDirection]);

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);
    const totalPages = Math.ceil(filteredTodos.length / todosPerPage);

    const toggleSortDirection = () => {
        setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {   
        event.target     
        setCurrentPage(value);
    };

    return (
        <Container maxWidth="md" sx={{ 
            border: '0.3px solid',
            p: 2,
            mt: 2,
            borderRadius: '20px'
        }}>
            <TodoCreatedPanel onAddTodo={onAddTodo} categories={categories} />

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2}}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search todo"
                    value={searchTitle}
                    onChange={e => setSearchTitle(e.target.value)}
                    sx={{ mr: 2, borderRadius: '16px' }}
                />
                
                <Button 
                    variant="contained"
                    onClick={toggleSortDirection}
                    sx={{ 
                        bgcolor: '#4CAF50',
                        '&:hover': { bgcolor: '#45a049' }
                    }}
                >
                    Sort {sortDirection === 'asc' ? '↓ Desc' : '↑ Asc'}
                </Button>
            </Box>

            <TodoItems 
                todos={currentTodos} 
                categories={categories}
                onUpdateTodo={onUpdateTodo}
                onDeleteTodo={onDeleteTodo}
            />

            {filteredTodos.length > todosPerPage && (
                <Stack spacing={2} sx={{ mt: 2, alignItems: 'center' }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        showFirstButton
                        showLastButton
                    />
                </Stack>
            )}
        </Container>
    );
};

export default TodoList;
