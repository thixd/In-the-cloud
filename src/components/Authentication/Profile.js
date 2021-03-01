import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import '../../styling/auth.css'
import logo from '../../asset/logo.gif'
import { Container } from 'react-bootstrap'

export default function Profile() {
    const [error, setError] = useState()
    const { currentUser, logout} = useAuth()
    const history = useHistory()
    function handleLogOut() {
        setError("")
        try{
            logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }
    return (
        <Container className = "d-flex align-items-center justify-content-center">
            <div className = "w-100" style = {{maxWidth: "400px"}}>
                <div> 
                    <span><img src={logo} alt="In the cloud" style = {{width: 150, height: 150, flex:1, justifyContent: 'center'}}/> </span> 
                    <span className = "Title">In The Cloud</span>
                </div>
                <div>
                <Card className = "mt-4">
                    <Card.Body>
                        <h2 className="text-center mb-4">Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <strong>Email:</strong> {currentUser.email}
                    </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogOut}>
                        Log Out
                    </Button>
                    <Button variant="link">
                        <Link to ="/">Home</Link>
                    </Button>
                    </div>
                </div>
            </div>
        </Container>
      )
}