import Image from "next/image";
import Link from "next/link";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import classes from "./LandingPageHeader.module.css";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import LandingPageHeaderSearchDropDown from "../LandingPageHeaderSearchDropDown/LandingPageHeaderSearchDropDown";
import ViewAllCategory from "../ViewAllCategory/ViewAllCategory";
import NotificationCard from "../NotificationCard/NotificationCard";
import { useRouter } from "next/router";
import JobRequestDropdown from "../JobRequestDropdown/JobRequestDropdown";

const LandingPageHeader = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const winWidth = window.innerWidth;
    setWindowWidth(winWidth);
  }, []);
  return (
    <header className={classes.header}>
      <Navbar collapseOnSelect expand="lg py-0" className={classes.home_nav}>
        <Container>
          <div>
            <LandingPageHeaderSearchDropDown />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link href="/">
                <a className={classes.logo}>
                  <Image
                    src="/images/logo2.png"
                    width={174}
                    height={64}
                    alt="Fixlancer"
                    className={classes.logo}
                  />
                </a>
              </Link>
            </Nav>
            <Nav className="align-items-center">
              <ProfileMenu />
              <IconButton
                color="primary"
                component="span"
                className={classes.chat}
                onClick={() => router.push("/inbox")}
              >
                <EmailIcon className={classes.email} />
              </IconButton>

              <NotificationCard />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {windowWidth > 1200 && (
        <Container>
          <Row>
            {/* <Col lg="3">
              <button className={classes.view_all}>
                View All Categories{" "}
                <ArrowForwardIosOutlinedIcon className={classes.arrow_fr} />
              </button>
            </Col> */}
            <ViewAllCategory />
            <Col lg="9">
              <div className={classes.header_bottom_right_btn_div}>
                <button
                  onClick={() => router.push("/users/username/dashboard")}
                >
                  Home
                </button>
                <Divider
                  orientation="vertical"
                  className={classes.vertical_divider}
                />
                {/* <button onClick={() => router.push("/job-request")}>
                  Job Request
                </button> */}
                <JobRequestDropdown />
                <Divider
                  orientation="vertical"
                  className={classes.vertical_divider}
                />
                <button onClick={() => router.push("/username/new-fix")}>
                  Start Selling
                </button>
                <Divider
                  orientation="vertical"
                  className={classes.vertical_divider}
                />

                <button onClick={() => router.push("/order/manage-order")}>
                  Manage Sales
                </button>
                <Divider
                  orientation="vertical"
                  className={classes.vertical_divider}
                />
                <button onClick={() => router.push("/order/manage-order")}>
                  Manage Orders
                </button>
                <Divider
                  orientation="vertical"
                  className={classes.vertical_divider}
                />
                <button onClick={() => router.push("/username/finance")}>
                  Finance
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </header>
  );
};

export default LandingPageHeader;
