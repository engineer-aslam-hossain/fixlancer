import { Container, Navbar } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import classes from "./Header.module.css";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import SwipeableTemporaryDrawer from "../MenuDrawer/MenuDrawer";

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

        {/* <MenuDrawer /> */}
        <SwipeableTemporaryDrawer />
      </Container>
    </Navbar>
  );
};

export default Header;
