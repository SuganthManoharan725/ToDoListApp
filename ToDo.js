import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { LiaEdit } from 'react-icons/lia';
import { MdDone } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { SelectAllToDo, updateToDo, deleteToDo } from './todoSlice';
import './ToDo.css';

const ToDo = () => {
    const [isEditing, setIsEditing] = useState(null); // Holds the ID of the ToDo being edited
    const [editText, setEditText] = useState(''); // Text for editing
    const dispatch = useDispatch();
    const todos = useSelector(SelectAllToDo);

    // Handle click on the edit icon
    const handleEditClick = (todo) => {
        setIsEditing(todo.id); // Set the ID of the ToDo being edited
        setEditText(todo.task); // Populate the edit text with the current task
    };

    // Handle update submission
    const handleUpdate = () => {
        if (isEditing) {
            dispatch(updateToDo({ id: isEditing, newTask: editText })); // Update the ToDo in Redux
            setIsEditing(null); // Reset the editing state
        }
    };

    // Handle delete action
    const handleDelete = (todoId) => {
        dispatch(deleteToDo(todoId)); // Delete the ToDo
    };

    return (
        <div className="todo-container">
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <article key={todo.id} className="todo-item">
                        <input type="checkbox" className="todo-checkbox" />
                        {isEditing === todo.id ? (
                            <input
                                className='update-text'
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            /> 
                             ) : (

                            <>
                            <p className="todo-task">{todo.task}</p>
                            <LiaEdit
                            className="edit-icon"
                            onClick={() => handleEditClick(todo)} // Click to edit
                        />
                        <MdDeleteForever
                            className="icon-button"
                            onClick={() => handleDelete(todo.id)} // Delete action
                        />
                           </>

                        )}
                        
                        {isEditing === todo.id && (
                            <MdDone className= 'update-icon' onClick={handleUpdate} /> // Update button
                        )}
                    </article>
                ))
            ) : (
                <b>No Data Found</b>
            )}
        </div>
    );
};

export default ToDo;
