import { Container, Navbar } from "react-bootstrap";
import Link from "next/link";
import classes from "./Header.module.css";
import SwipeableTemporaryDrawer from "../MenuDrawer/MenuDrawer";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={classes.home_nav}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <a className={classes.logo}>
              <div
                className={classes.logo_img_div}
                style={{ backgroundImage: `url(/images/logo2.png)` }}
              ></div>
            </a>
          </Link>
        </Navbar.Brand>

        <SwipeableTemporaryDrawer />
      </Container>
    </Navbar>
  );
};

export default Header;
