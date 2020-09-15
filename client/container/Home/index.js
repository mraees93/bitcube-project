import React from 'react'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = (props) => {
    return (
        <Container> 
            
            <h1>Welcome</h1><br />
        <p>You can choose to sign up or if you already have an account you can sign in.</p>
        <br></br>
            <div className = "signup" >
            <Link to = "/signup" style={{textDecoration:"none"}}>Signup</Link>
            </div>
            <div className = "signin">
            <Link to = "/signin" style={{textDecoration:"none"}}>Signin</Link>
            </div>
        </Container>
    )
}

export default Home;
