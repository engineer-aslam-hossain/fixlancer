import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./LandingPageHeader.module.css";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import LandingPageHeaderBottom from "../LandingPageHeaderBottom/LandingPageHeaderBottom";
import LandingPageHeaderSearchDropDown from "../LandingPageHeaderSearchDropDown/LandingPageHeaderSearchDropDown";
import { useRouter } from "next/router";

const LandingPageHeader = () => {
  const [request, setRequest] = useState("");
  const [finance, setfinance] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  const router = useRouter();

  const reqs = [
    {
      title: "All Request",
      route: "/",
    },
    {
      title: "My Request",
      route: "/",
    },
    {
      title: "Request Buyer",
      route: "/",
    },
    {
      title: "Search Fix",
      route: "/",
    },
    {
      title: "Category List",
      route: "/",
    },
    {
      title: "Notifications",
      route: "/",
    },
    {
      title: "Edit Offer",
      route: "/",
    },
    {
      title: "Create Fix",
      route: "/user/new-fix",
    },
  ];

  const finances = ["Finance", "Order Fix"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [fnanceAnchorEl, setFinaceAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const finance_open = Boolean(fnanceAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFinanceClick = (event) => {
    setFinaceAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFinanceClose = () => {
    setFinaceAnchorEl(null);
  };

  useEffect(() => {
    const winWidth = window.innerWidth;
    console.log(winWidth);
    setWindowWidth(winWidth);
  }, []);
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={classes.home_nav}>
        <Container>
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
          <Divider
            orientation="vertical"
            className={classes.vertical_divider}
          />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">
                <a className={classes.home}>Home</a>
              </Link>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className={classes.req_dropdown}
              >
                {request !== "" ? request : "Job Request"}
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {reqs.map((item, indx) => (
                  <MenuItem
                    key={indx}
                    onClick={() => {
                      setRequest(item.title);
                      handleClose();
                      router.push(item.route);
                    }}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
              <Link href="/">
                <a className={classes.link}>Start Selling</a>
              </Link>
              <Link href="/">
                <a className={classes.link}>Manage Sales</a>
              </Link>
              <Link href="/">
                <a className={classes.link}>Manage Orders</a>
              </Link>
              <Button
                id="fade-button"
                aria-controls={finance_open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={finance_open ? "true" : undefined}
                onClick={handleFinanceClick}
                className={classes.req_dropdown}
              >
                {finance !== "" ? finance : "Finance"}
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={fnanceAnchorEl}
                open={finance_open}
                onClose={handleFinanceClose}
                TransitionComponent={Fade}
              >
                {finances.map((item, indx) => (
                  <MenuItem
                    key={indx}
                    onClick={() => {
                      setfinance(item);
                      handleFinanceClose();
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Nav>

            <Nav className="align-items-center">
              <div>
                <LandingPageHeaderSearchDropDown />
              </div>
              <IconButton
                color="primary"
                component="span"
                className={classes.chat}
              >
                <MailOutlineIcon />
              </IconButton>
              <IconButton
                color="primary"
                component="span"
                className={classes.notification}
              >
                <NotificationsNoneIcon />
              </IconButton>
              <ProfileMenu />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {windowWidth > 1200 && <LandingPageHeaderBottom />}
    </header>
  );
};

export default LandingPageHeader;
