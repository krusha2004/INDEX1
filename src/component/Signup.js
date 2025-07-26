import React, { useState } from 'react'

const Signup = () => {
    const [userDetails, setUserDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const [userData, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

   const handleChange = (e) => {
        console.log(e.target.name);
        
        setUserDetails({
            ...userDetails,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = () => {
        const arr = [...userData];
        if(editIndex !== null) {
            arr[editIndex] = userDetails
        } else {
            arr.push(userDetails)
        }
        setData(arr)
        setEditIndex(null)
        handleReset()
    }

    const handleReset = () => {
        setUserDetails({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        })
    }



    return (
        <div style={{backgroundColor:"rgb(245, 218, 223)"}} className="flex items-center justify-center min-h-screen">
            <div className=" p-8 w-[600px] ">
                <h1 className="text-5xl font-semibold text-center mb-6 text-[#092953]">Create Account</h1>
                <input type="text" name='firstname' placeholder="First name" value={userDetails.firstname} onChange={(e) => handleChange(e)}
                className="w-full mb-8 px-4 py-2 border border-[#092953]  focus:outline-none focus:ring-2 focus:ring-black" />
                <input type="text" name='lastname' placeholder="Last name" value={userDetails.lastname} onChange={(e) => handleChange(e)}
                className="w-full mb-8 px-4 py-2 border border-[#092953]  focus:outline-none focus:ring-2 focus:ring-black"/>
                <input type="text" name='email' placeholder="Email" value={userDetails.email} onChange={(e) => handleChange(e)}
                className="w-full mb-8 px-4 py-2 border border-[#092953]  focus:outline-none focus:ring-2 focus:ring-black"/>
                <input type="password" name='password' placeholder="Password" value={userDetails.password} onChange={(e) => handleChange(e)}
                className="w-full mb-8 px-4 py-2 border border-[#092953]  focus:outline-none focus:ring-2 focus:ring-black" />
                <button onClick={() => handleSubmit()} className="w-[100px] ml-[200px] bg-[#092953] text-white py-2 rounded-md hover:[#092953] transition hover:cursor-pointer"> Create </button>
            </div>
        </div>

    )
}

export default Signup
