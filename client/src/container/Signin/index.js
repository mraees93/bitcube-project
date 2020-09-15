import React, { useState } from 'react';
import {Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/input";
import { login } from "../../actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


const Signin = (props) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email, password
        }

        dispatch(login(user));
    }
    // if authenticated the user is automatically directed to the homepage
    // if(auth.authenticate) {
    //     return <Redirect to = {`/`} />
    // }

    return (
            <Container>
            <h2>Signin</h2>
        <Row style = {{ marginTop: "50px" }}>
            <Col md = {{ span: 6, offset: 3 }}>
                <Form onSubmit = {userLogin}>
                    <Input
                        label = "Email"
                        placeholder = "Email"
                        value = {email}
                        type = "Email"
                        onChange = {(e) => setEmail(e.target.value)}
                    />

                    <Input
                        label = "Password"
                        placeholder = "Password"
                        value = {password}
                        type = "Password"
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Signin;
