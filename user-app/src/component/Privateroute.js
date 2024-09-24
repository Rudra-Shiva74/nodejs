import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from './Auth'

export default function Privaterought() {
    console.log("object");
    if (isLoggedIn())
        return <Outlet />
    else return <Navigate to={'/login'} />;
}
