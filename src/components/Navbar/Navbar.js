import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Navbar = () => {
    const { auth, signOut } = useAuth()
    const [user] = useAuthState(auth)

    return (
        <nav className="flex justify-center gap-5 p-3 text-lg font-semibold">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-700' : 'text-blue-400')}>
                Home
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-blue-400')}>
                Products
            </NavLink>
            <NavLink to="/orders" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-blue-400')}>
                Orders
            </NavLink>
            <NavLink to="/register" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-blue-400')}>
                Register
            </NavLink>
            {user ? (
                <span>
                    {user?.displayName}{' '}
                    <button onClick={() => signOut(auth)} className="bg-green-500 px-2 py-1 rounded">
                        Sign Out
                    </button>
                </span>
            ) : (
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-blue-400')}>
                    Login
                </NavLink>
            )}
        </nav>
    )
}

export default Navbar
