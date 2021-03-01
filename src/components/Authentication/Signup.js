import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import '../../styling/auth.css'
import logo from '../../asset/logo.gif'
import { Container } from 'react-bootstrap'

export default function SignUp(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup }  = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmationRef.current.value){
            return setError('Password does not match')
        }
        try {
            setError('')
            setLoading(true)
            signup(emailRef.current.value,passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Fail to create account')
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
                    <Card>
                        <Card.Body>
                            <h2 className = "text-center mb-4">Sign Up</h2>
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
                                <Form.Group>
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type = "password" ref={passwordConfirmationRef} required/>
                                </Form.Group>
                                <Button className = 'w-100 text-center' type = "submit" disabled = {loading} 
                                        style = {{backgroundColor: '#fcbc34', border: 'transparent', borderRadius: 10}}>
                                    Sign Up
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className = "w-100 text-center mt-2">
                        Already have an account? <Link to='/login'>Log in</Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}
