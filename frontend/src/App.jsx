import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowBook from './pages/ShowBook'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import Edit from './pages/EditBook'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/edit/:id" element={<Edit />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
    </Routes>
  )
}

export default App