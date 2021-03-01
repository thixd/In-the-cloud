import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import '../../styling/auth.css'
import logo from '../../asset/logo.gif'
import { Container } from 'react-bootstrap'

export default function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login }  = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            login(emailRef.current.value,passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Fail to sign in')
        }
        setLoading(false)
    }
    return (
        <Container className = "d-flex align-items-center justify-content-center">
            <div className = "w-100" style = {{maxWidth: "400px"}}>
                <div> 
                    <span><img src={logo} alt="In the cloud" style = {{width: 150, height: 150, flex:1, justifyContent: 'center'}}/> </span> 
                    <span className = "Title">In The Cloud</span>
                </div>
                <div>
                    <Card style={{marginTop: 1}}>
                        <Card.Body className = "Card">
                            <h2 className = "text-center mb-4 orange">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit = {handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type = "email" ref={emailRef} required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type = "password" ref={passwordRef} required/>
                                </Form.Group>
                                {/* <Button className = "w-100 text-center mt-2 green" 
                                        type = "submit" disabled = {loading} >Log in</Button> */}
                                <Button 
                                    style = {{backgroundColor: '#fcbc34', border: 'transparent', borderRadius: 10}}
                                    className = "w-100 text-center" 
                                    type = "submit" disabled = {loading} >
                                    Log in
                                </Button>
                            </Form>
                            <div className = "w-100 text-center mt-2">
                                <Link to="/forgetpw">Forget Password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className = "w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}
