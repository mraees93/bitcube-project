import React, { useState } from 'react';
import {Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/input";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/user.actions";

const Signup = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const userSignup = (e) => {
        e.preventDefault();
        const user = {
            firstName, lastName, email, password
        }
        dispatch(signup(user));
    }

    // if(auth.authenticate) {
    //     return <Redirect to = {`/`} />
    // }

    // if(user.loading) {
    //     return <p>Loading...</p>
    // }

    return (
            <Container>
            <h2>Signup</h2>
            {/* {user.message} */}
            <Row style = {{ marginTop: "50px" }}>
                <Col md = {{ span: 6, offset: 3 }}>
                    <Form onSubmit = {userSignup}>
                        <Input
                            label = "First Name"
                            placeholder = "First Name"
                            value = {firstName}
                            type = "text"
                            onChange = {(e) => setFirstName(e.target.value) }
                        />
                        <Input
                            label = "Last Name"
                            placeholder = "Last Name"
                            value = {lastName}
                            type = "text"
                            onChange = {(e) => setLastName(e.target.value) }
                        />
                        <Input
                            label = "Email"
                            placeholder = "Email"
                            value = {email}
                            type = "Email"
                            onChange = {(e) => setEmail(e.target.value) }
                        />
                        <Input
                            label = "Password"
                            placeholder = "Password"
                            value = {password}
                            type = "Password"
                            onChange = {(e) => setPassword(e.target.value) }
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

export default Signup;
