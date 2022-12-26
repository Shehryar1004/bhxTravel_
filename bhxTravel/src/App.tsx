import './App.css'
import {Routes, Route} from 'react-router-dom'
import {HomePage, AboutPage, ServicesPage, ContactPage} from './pages/index.js'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <Routes>
        <Route path='/' element={ <DefaultLayout> <HomePage /> </DefaultLayout>}/>
        <Route path='/about' element={ <DefaultLayout> <AboutPage /> </DefaultLayout>}/>
        <Route path='/services' element={ <DefaultLayout> <ServicesPage /> </DefaultLayout>}/>
        <Route path='/contact' element={ <DefaultLayout> <ContactPage /> </DefaultLayout>}/>
    </Routes>
  )
}

export default App
