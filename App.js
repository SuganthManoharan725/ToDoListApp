import React from 'react'
import ToDo from './features/todo/ToDo'
import AddToDoList from './features/todo/AddToDoList'

const App = () => {
  return (
    <div>
      <AddToDoList />
      <ToDo />
    </div>
  )
}

export default App
