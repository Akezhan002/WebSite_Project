import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from '../Components/Header/Header'
import './App.css'
import {AddPage} from '../Components/Add/AddPage'
import {EditPage} from '../Components/Add/Edit'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />}></Route>
      <Route path='/new' element={<AddPage />} />
      <Route path='/edit' element={<EditPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
