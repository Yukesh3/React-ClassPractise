import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap'
import Card from './practise/card'
import './Style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const arr = ['RRR', 'KGF2', 'Beast']


root.render(
<>



<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
{
    
    arr.map((items)=>{
     return <ul><li><Card name={items} link="https://wallpapercave.com/wp/wp5711453.jpg"/></li></ul> 
    }
   
    )

}
   
    


    </>    























/* <div>

 


<h1>Self Intro 😁</h1>

<details>

<summary>Summary</summary>

<pre>

<h2><mark>Name:</mark> Yukesh K </h2> <br/>

<h2><mark>Date of Birth:</mark>  31-05-1999</h2><br/>

<h2>I am from Tamilnadu. I did B.E Mechanical Engineering in MAM School Of Engineering college in 2020.
After that i was worked <br/>in mechanical company name was Youngshin India Private Limited around 11 months
with the role of quality inspection. During <br/>pandemic breakdown i left that job. Now i am currently doing 
<mark> Full Stack Developement</mark> course bacause i want to change my career. </h2><br/>

<a href="mailto:yukesh.fsd@gmail.com" rel="noreferrer"  target="_blank"> 
<img src='email.png' width="30px" alt='Email'></img>
</a> &nbsp; 

<a href="https://github.com/Yukesh3" rel="noreferrer" target="_blank"> 
<img src='GitHub.png' width="30px" alt='Git'></img>
</a>  

</pre>

</details>





</div> */





);

