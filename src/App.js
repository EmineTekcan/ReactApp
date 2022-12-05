import './App.css';
import {Button,Navbar, Container, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import {  BrowserRouter,   Routes,  Route,  Link } from "react-router-dom";
import Product from './Product';
import Aboutus from './Aboutus';
import Bingo from './Bingo';
import Home from './Home';
import Woman from './Woman';
import Man from './Man';
import logo from './images/logo.jpg'
import back from './images/back.jpg'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar bg="light" expand="lg" >
  <Container className='nav' fluid>
    <Navbar.Brand href="#"><img src={logo} alt="mffnm" style={{width:'130px' , height:'100px'}} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
        <Nav.Link as={Link} to="/bingo">Bingo</Nav.Link>
        <NavDropdown title="categories" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="/woman">Woman</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/man">Man</NavDropdown.Item>
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
    <div>
      <Routes>
        <Route path="/products" element={<Product/>}></Route>
        <Route path="/aboutus" element={<Aboutus initialText="Enter something" buttontext="Click!" />}></Route>
        <Route path="/bingo" element={<Bingo/>}></Route>
        <Route path="/woman" element={<Woman/>}></Route>
        <Route path="/man" element={<Man/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>

    </div>
    </BrowserRouter>
  );
}
export default App;

