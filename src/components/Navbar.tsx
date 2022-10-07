import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../assets/ozzylogo.png";
const Navbar = () => {
  return (
    <>
      <NavbarBs bg="light" sticky="top">
        <Container>
          <NavbarBs.Brand href="http://codeguruozzy.com">
            <img
              src={Logo}
              alt="logo picture"
              className="d-inline-block align-top"
              width="150px"
              height="120px"
            />
          </NavbarBs.Brand>
          <Nav className="me-auto">
            {/* we use Nav.Link from react bootstrap as NavLink react router dom to navigera other pages */}
            <Nav.Link to="/" as={NavLink}>
              HOME
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              STORE
            </Nav.Link>
            <Nav.Link to="/contact" as={NavLink}>
              CONTACT
            </Nav.Link>
          </Nav>
          <Button
            style={{ width: "4rem", height: "4rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <FaShoppingCart size="1.5rem" />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.3rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(-25%, 25%)",
              }}
            >
              3
            </div>
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
};

export default Navbar;
