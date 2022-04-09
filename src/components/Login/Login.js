import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import fLogo from '../images/facebook.png'
import gLogo from '../images/google.png'

const Login = () => {
    const { auth } = useAuth()
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/'

    const googleSignInHandler = () => {
        signInWithGoogle()
        .then(() => {
            navigate(from, { replace: true })
        })
        
    }

    return (
        <div>
            <div className="mt-14 w-1/4 mx-auto bg-white drop-shadow rounded border-[1px] p-3">
                <form className="flex flex-col items-center gap-4 p-2">
                    <p className="text-3xl font-semibold text-blue-700">Please Login</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border-[1px] rounded p-1 pl-3"
                    />
                    <input
                        type="password"
                        name=""
                        placeholder="Your Password"
                        className="border-[1px] rounded p-1 pl-3"
                    />
                    <input type="submit" value="Login" className="bg-green-500 px-4 py-2 rounded" />
                </form>
                <div className="flex items-center">
                    <hr className="w-1/2 mx-3" />
                    <p>OR</p>
                    <hr className="w-1/2 mx-3" />
                </div>
                <div>
                    <img onClick={googleSignInHandler} src={gLogo} alt="" className="mx-auto mb-2 cursor-pointer" />
                    <img src={fLogo} alt="" className="mx-auto w-[265px] h-[52px]" />
                </div>
            </div>
        </div>
    )
}

export default Login
