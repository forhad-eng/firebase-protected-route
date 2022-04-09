import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Orders from './components/Orders/Orders'
import Products from './components/Products/Products'
import Register from './components/Register/Register'
import RequireAuth from './components/RequireAuth/RequireAuth'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route
                    path="/orders"
                    element={
                        <RequireAuth>
                            <Orders />
                        </RequireAuth>
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
