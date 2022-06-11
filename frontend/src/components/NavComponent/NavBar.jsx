import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Button, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  logout,
  reset,
} from "/Users/edwin/Desktop/to-do/frontend/src/features/auth/AuthSlice";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (isError) {
      toast(message);
    }
  }, [isError, user, message, isSuccess, navigate]);
  return (
    <div className="navigation">
      <Navbar bg="light" expand="lg">
        {user ? (
          <>
            <Container>
              <Navbar.Brand href="#home">
                logged in as {user.email}
              </Navbar.Brand>
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button
                    onClick={(e) => {
                      handleLogout(e);
                    }}
                  >
                    <i
                      className="fa fa-sign-out"
                      aria-hidden="true"
                      style={{ marginRight: "20px" }}
                    ></i>
                    Logout
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            </Container>
          </>
        ) : (
          <>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </>
        )}
      </Navbar>
    </div>
  );
}

export default NavBar;
