import React from 'react'

const Register = () => {
    return (
        <div className="mt-14">
            <div className="w-1/4 mx-auto bg-white drop-shadow rounded border-[1px]">
                <form className="flex flex-col items-center gap-4 p-2">
                    <p className="text-3xl font-semibold text-blue-700">Please Register</p>
                    <input type="text" placeholder="Your Name" className="border-[1px] rounded p-1 pl-3" />
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
                    <input type="submit" value="Register" className="bg-green-500 px-4 py-2 rounded" />
                </form>
            </div>
        </div>
    )
}

export default Register
