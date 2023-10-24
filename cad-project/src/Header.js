import React from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect } from 'react'
import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';

function Header() {

  let auth = getAuth();
  let navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch(err => {
        alert(err.message);
      })
  }

  const authState = () => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        navigate('/home');
      }
      else {

      }
    })
  }


  useEffect(() => {
    authState();
  }, [])
  const [searchTerm, setSearchTerm] = useState('')

  const [show, setShow] = useState(false);
  const [avatar_url, setAvatartURL] = useState('')
  const [redirect, setRedirect] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-4">
          <Navbar.Brand className='headertext' href="#"><img className='header_logo' src='https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png' alt='' />
          </Navbar.Brand>
          <Navbar.Brand className='headertext' href="#">Stream</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">

                <Nav.Link className='iconss' href="https://github.com/Shiv13527/Cloud-Application-Development-Theory" ><GitHubIcon /> Github</Nav.Link>
                <Nav.Link className='iconss' href="https://www.linkedin.com/in/shiv-pratap-pundir-427672252" ><LinkedInIcon />Linkedin</Nav.Link>
                <NavDropdown
                  title='Actions'
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item onClick={handleShow}><DriveFileRenameOutlineIcon /></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logOut}><LogoutIcon /></NavDropdown.Item>

                </NavDropdown>
                <Nav.Link href={redirect}><Avatar src={avatar_url} />
                </Nav.Link>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Avatar</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Your Profile Picture URL</Form.Label>
                        <Form.Control
                          type="text"
                          autoFocus
                          onChange={(event) => { setAvatartURL(event.target.value); }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Redirection URL</Form.Label>
                        <Form.Control
                          type="text"
                          autoFocus
                          onChange={(event) => { setRedirect(event.target.value); }}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Nav>
              <Form className="d-flex">
              </Form>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}

    </div>

  )
}

export default Header
