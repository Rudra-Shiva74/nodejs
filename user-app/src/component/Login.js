import React, { useState } from 'react'
import { LoginUser } from './Auth';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const LoginForm = (e) => {
        e.preventDefault();
        try {
            LoginUser(email, pass);
        } catch (error) {
            alert("You not register please register");
            navigate('/signup');
        }

    }
    return (
        <div className='d-flex justify-content-center pt-4'>
            <div className="card shadow" style={{ width: "30rem" }}>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={LoginForm}>
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Address" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="pass" name='pass' value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter Your Password" />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
