import './App.css'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/index.js'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <Routes>
        <Route path='/' element={ <DefaultLayout> <HomePage /> </DefaultLayout>}/>
    </Routes>
  )
}

export default App
