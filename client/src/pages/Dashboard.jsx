import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function Dashboard() {

    return <>
        <h1 className="text-6xl pl-6 font-bold">LinkBACK</h1>
        <div className="m-6">
            <Link to="/login"> <button className="bg-primary rounded-sm text-light p-1 cursor-pointer">Login Page</button> </Link>
            <Link to="/message"> <button className="bg-primary rounded-sm text-light p-1 cursor-pointer">Messaging</button> </Link>
            <Link to="/universities"> <button className="bg-primary rounded-sm text-light p-1 cursor-pointer">Universities</button> </Link>
            <Link to="/user"> <button className="bg-primary rounded-sm text-light p-1 cursor-pointer">User</button> </Link>
        </div>
    </>
}