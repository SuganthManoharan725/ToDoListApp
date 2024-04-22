import React, { useState } from 'react';
import { FaSquarePlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToDo } from './todoSlice';
import './AddToDoList.css'
import { nanoid } from '@reduxjs/toolkit';




const TodoForm = ({handleUpdate}) => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      dispatch(addToDo({
          id: nanoid(),
        task: inputText
      }));
      setInputText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a new todo"
        className="todo-input"
      /><FaSquarePlus className='icon' onClick={handleSubmit}/>      
    </form>
  );
};

export default TodoForm;
