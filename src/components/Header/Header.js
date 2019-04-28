import React, {Component} from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg" className="nav-bar-content">
                <Navbar.Brand>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                </Navbar.Brand>
                <span>Best blog ever</span>
                <Nav.Link href='/create'>
                        <Button className="creer">Create an article</Button>
                    </Nav.Link>
            </Navbar>
        );
    }
}


export default Header;
