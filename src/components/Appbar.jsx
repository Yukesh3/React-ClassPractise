import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'




const Appbar = () => {
    const user=true;
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container fluid>
                <Navbar.Brand><Link to='/'>NetFlix Mini🙌</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        
                    </Nav>
                    {
                        user?
                        <Link to='/' className='btn btn-danger ' >Logout</Link>
                        :<Link to='/login'  className='btn btn-warning ' >Login</Link>
                    }
                    
                    
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Appbar;



