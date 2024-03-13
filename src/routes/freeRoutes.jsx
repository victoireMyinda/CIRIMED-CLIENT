
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/main'
import Navbar from '../components/header/header'
import Social from '../components/social/social'
import DevenirMembre from '../pages/devenirmembre/signup'


const RoutesFree = () => {
    return (
        <BrowserRouter>
            <Social />
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<DevenirMembre/>} />

            </Routes>
            
           
          
        </BrowserRouter>
    )
}

export default RoutesFree