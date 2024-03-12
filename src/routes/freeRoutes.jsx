
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/main'
import Navbar from '../components/header/header'
import Footer from '../components/footer/footer'
import Social from '../components/social/social'


const RoutesFree = () => {
    return (
        <BrowserRouter>
            <Social />
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesFree