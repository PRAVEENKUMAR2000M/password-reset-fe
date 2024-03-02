import React, { useEffect, useState } from 'react'
import authService from '../services/authservices'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import '../components/style.css'
import { useNavigate } from 'react-router-dom'
// import Navbar from './Navbar'

function Dashboard() {
    const [userdata, setUserdata] = useState({})
    console.log(userdata)
    
    const navigate = useNavigate()
    const handleSignout = (event) => {
        event.preventDefault()
        navigate('/')
        sessionStorage.clear()
        localStorage.clear()
    }

    useEffect(() => {
        authService.getuser()
            .then(user => {
                setUserdata(user)
            })
    }, [])
    return (
        <div>
            <Navbar bg="primary" data-bg-theme="dark" className='navbar'>
                <Container>
                    <Navbar.Brand className="signout" onClick={handleSignout}>Sign Out</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='heading'>
                <h3>Welcome {userdata?.user?.userName} ! this is a protected data</h3>
                </div>
        </div>
    )
}

export default Dashboard