import { Container, Navbar } from "react-bootstrap";
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
                src="/images/logo2.png"
                width={174}
                height={64}
                alt="Fixlancer"
              />
            </a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Header;
