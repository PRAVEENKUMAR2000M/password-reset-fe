// // import { Button } from 'bootstrap';
// import React, { useEffect, useState } from 'react'
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// import authservice from '../services/authservices'
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';


// function navbar() {
     
//     const [userdata, setUserdata] = useState([])
//     console.log(userdata)

//     const navigate = useNavigate()
//     const handleSignOut = (e) => {
//         e.preventDefault()
//         navigate('/')
//         sessionStorage.clear()
//         localStorage.clear()
//         toast("User Logged out!")

//     }
  
//     useEffect(() => {
//         authservice.getuser()
//             .then(user => {
//             setUserdata(user)
//         })
//      }, [])

//     return (
//         // <Navbar bg="primary" data-bs-theme="dark">
//         //     <Container>
//         //         <Navbar.Brand href="#home">User Dashboard</Navbar.Brand>
//         //         <Nav className="me-auto">
//         //             <Nav.Link href="#home">Home</Nav.Link>
//         //             <Nav.Link href="#features">Features</Nav.Link>
//         //             <Nav.Link href="#pricing">Pricing</Nav.Link>
//         //         </Nav>
//         //         <Navbar.Brand onClick={handleSignOut}>Sign Out</Navbar.Brand>
//         //     </Container>
//         // </Navbar>
//         <div>
//             <ul>
//                 {
//                     userdata.map((item, index) => {
//                         return <li>{item}</li>
//                     })
//                 }
//             </ul>
//      </div>
//     )
// }

// export default navbar