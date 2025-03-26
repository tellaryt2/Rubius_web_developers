import { 
    Box, 
    TextField, 
    Button, 
    IconButton, 
    Typography 
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { FC, useState } from 'react';
import { ITodo } from '../../types/types';

interface TodoItemProps {
    todo: ITodo;
    onUpdateTodo: (id: number, updatedFields: Partial<ITodo>) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onUpdateTodo, onDeleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState({
        description: todo.description,
    });

    const startEditing = () => {
        setEditedTodo({
            description: todo.description,
        });
        setIsEditing(true);
    };

    const saveEdit = () => {
        if (editedTodo.description.trim()) {
            onUpdateTodo(todo.id, {
                description: editedTodo.description,
            });
            setIsEditing(false);
        } else {
            alert("Description cannot be empty!");
        }
    };

    return (
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            backgroundColor: 'rgb(215, 233, 248)',
            borderRadius: 1
        }}>
            <Box sx={{ flexGrow: 1 }}>
                {isEditing ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <TextField
                            fullWidth
                            value={editedTodo.description}
                            onChange={(e) =>
                                setEditedTodo({ ...editedTodo, description: e.target.value })
                            }
                        />
                        <Button 
                            variant="contained"
                            onClick={saveEdit}
                            sx={{ alignSelf: 'flex-end' }}
                        >
                            Save
                        </Button>
                    </Box>
                ) : (
                    <Box>
                        <Typography>Дата: {todo.date}</Typography>
                        <Typography>Описание: {todo.description}</Typography>
                        <Typography>Проект: {todo.category}</Typography>
                    </Box>
                )}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton onClick={startEditing}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDeleteTodo(todo.id)}>
                    <DeleteIcon color="error" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default TodoItem;