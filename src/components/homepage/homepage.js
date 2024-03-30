import React from "react"
import "./homepage.css"

const Homepage = ({ loginUser, setLoginUser }) => {
    return (
        <div className="homepage">
            <h1>Hello {loginUser && loginUser.email}</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
}

export default Homepage;
