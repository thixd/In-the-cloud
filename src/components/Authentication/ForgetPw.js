import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import logo from '../../asset/logo.gif'
import '../../styling/auth.css'
import { Container } from 'react-bootstrap'

export default function ForgetPw(){
    const emailRef = useRef()
    const { forgetpw }  = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        try{
            setError('')
            setMessage("")
            setLoading(true)
            forgetpw(emailRef.current.value)
            setMessage("Check your registed email to reset your password")
        } catch {
            setError('Fail to reset password')
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
                <Card>
                    <Card.Body>
                        <h3 className = "text-center mb-4">Reset password</h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form onSubmit = {handleSubmit}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type = "email" ref={emailRef} required/>
                            </Form.Group>
                            <Button 
                                style = {{backgroundColor: '#fcbc34', border: 'transparent', borderRadius: 10}}
                                className = 'w-100 text-center' type = "submit" disabled = {loading} >Reset Password
                            </Button>
                        </Form>
                        <div className = "w-100 text-center mt-2">
                            <Link to="/login">Log in</Link>
                        </div>
                    </Card.Body>
                </Card>
                <div className = "w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </Container>
    )
}
