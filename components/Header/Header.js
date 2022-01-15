import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={classes.home_nav}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <a className={classes.logo}>
              <Image
                src="/images/logo.png"
                width={174}
                height={64}
                alt="Fixlancer"
              />
            </a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link href="/login">
              <a className={classes.login}>Login</a>
            </Link>
            <Link href="/register">
              <a className={classes.register}>Register</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
