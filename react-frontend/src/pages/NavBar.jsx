import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { useAuthContext } from "@asgardeo/auth-react";
import { useState } from 'react';

const LoginStatusBar = props => {
    // const { state, signIn, signOut, getDecodedIDToken, getAccessToken } = useAuthContext();
    let authenticated = localStorage.getItem('authenticated');

    // const decodedToken = async () => {
    //     if (state.isAuthenticated === true) {
    //         let token = await getDecodedIDToken();
    //         props.setDecodedToken(token);
    //         localStorage.setItem('decodedId', token);
    //     }
    // };

    // const accessToken = async () => {
    //     if (state.isAuthenticated === true) {
    //         let token = await getAccessToken();
    //         localStorage.setItem('accessToken', token);
    //     }
    // };

    if (authenticated != null) {
        // || state.isAuthenticated === true) {
        // if (authenticated == null) {
        //     localStorage.setItem('authenticated', true);
        //     localStorage.setItem('userName', state.username);
        //     decodedToken();
        //     accessToken();
        // }
        return (
            <div>
                <Navbar.Text>
                    {localStorage.getItem('userName')}
                </Navbar.Text>
                {/* <Nav.Link onClick={() => logout(signOut)}>Logout</Nav.Link> */}
            </div>
        );
    } else {
        return <></>
        // return <Nav.Link onClick={() => signIn()}>Login</Nav.Link>
    }
}

const logout = signOut => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('userName');
    localStorage.removeItem('decodedId');
    signOut();
};

const Navigation = () => {

    const [decodedToken, setDecodedToken] = useState({});

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Stock App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {<Nav.Link as={Link} to="/items">Items</Nav.Link >}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <LoginStatusBar setDecodedToken={setDecodedToken} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;