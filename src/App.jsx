import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import AddDataPage from './components/pages/AddDataPage'
import UpdateDataPage from './components/pages/UpdateDataPage'
import AllDataPage from './components/pages/AllDataPage'
import AddUser from './components/pages/AddUser'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exaxt path='/' element={<AddUser />}/>
          <Route exaxt path='/update' element={<UpdateDataPage />}/>
          <Route exaxt path='/all' element={<AllDataPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
