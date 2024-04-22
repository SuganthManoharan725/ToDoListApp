import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        task: "studying"
    },
    {
        id: "2",
        task: "playing"
    }
];

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const { id, task } = action.payload;
            state.push({ id, task });
        },
        prepare(id, task) {
            return {
                payload: {
                    id: nanoid(),
                    task
                }
            };
        },
        updateToDo: (state, action)=>{
            const { id, newTask } = action.payload;  // Get the ID and new task
            const todoToUpdate = state.find((todo) => todo.id === id);  // Find the item to update
            if (todoToUpdate) {
                todoToUpdate.task = newTask;  // Update the task
            }
        },
        deleteToDo: (state, action) =>{
            const ToDoId = action.payload;
            return state.filter(todo => todo.id !== ToDoId);
        }
    }
});

export const SelectAllToDo = (state) => state.todo
export const { addToDo , updateToDo, deleteToDo} = todoSlice.actions;
export default todoSlice.reducer;
