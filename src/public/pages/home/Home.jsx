import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logo.png";
import SignoutDropdown from "../../components/dropdrowns/SignoutDropdown";
import "./home.css";

const Home = () => {
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      location.pathname = "/signup";
    }
  }, []);
  return (
    <>
      <Navbar id="homeNavbar">
        <Container id="homeNavbarContainer">
          <Navbar.Brand href="#home" id="logoName">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            Object Following Drone
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <SignoutDropdown />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
