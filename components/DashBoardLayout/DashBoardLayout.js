import Image from "next/image";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import classes from "./DashBoardLayout.module.scss";
import Link from "next/link";

import { useContext, useState } from "react";
import { useRouter } from "next/router";
import FixLancerContext from "../FixLancerContext/FixLancerContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: 240,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "rgba(254, 129, 49, 0.04)",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DashBoardLayout = ({ children, appbar_title }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const { activeItem, setActiveItem } = useContext(FixLancerContext);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawerItems = [
    {
      title: "Overview",
      icon: "/icons/overview.svg",
      link: "/admin",
    },
    {
      title: "Fixes",
      icon: "/icons/technics.svg",
      link: "/admin/fixes",
    },
    {
      title: "Orders",
      icon: "/icons/shopping_bag.svg",
      link: "/profile",
    },
    {
      title: "Users",
      icon: "/icons/contacts.svg",
      link: "/admin/profile",
    },
    {
      title: "Transactions",
      icon: "/icons/transaction.svg",
      link: "/admin/profile",
    },
    {
      title: "Ratings",
      icon: "/icons/rating.svg",
      link: "/admin/profile",
    },
    {
      title: "Job Request",
      icon: "/icons/agents.svg",
      link: "/admin/profile",
    },
    {
      title: "Payment Gateway",
      icon: "/icons/credit_card.svg",
      link: "/admin/profile",
    },
    {
      title: "Prohibited Words",
      icon: "/icons/prohibited.svg",
      link: "/admin/profile",
    },
    {
      title: "Withdrawals",
      icon: "/icons/withdraw.svg",
      link: "/admin/profile",
    },
    {
      title: "Wallet",
      icon: "/icons/wallet.svg",
      link: "/admin/profile",
    },
    {
      title: "Messages",
      icon: "/icons/Group.svg",
      link: "/admin/profile",
    },
    {
      title: "Categories",
      icon: "/icons/maintenance.svg",
      link: "/admin/profile",
    },
    {
      title: "Notifications",
      icon: "/icons/notification.svg",
      link: "/admin/profile",
    },
    {
      title: "Affiliate",
      icon: "/icons/affiliate_marketing.svg",
      link: "/admin/profile",
    },
    {
      title: "Settings",
      icon: "/icons/settings.svg",
      link: "/admin/profile",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className={classes.appbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon className={classes.menu_btn_icon} />
          </IconButton>
          <div className={classes.appbar_header}>
            <div>
              <h4 className={classes.appbar_title}>{appbar_title}</h4>
            </div>
            {appbar_title !== "Dashboard" && (
              <div className={classes.search_input_div}>
                <SearchOutlinedIcon className={classes.search_icon} />
                <input type="text" placeholder="Search" />
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: "#FFF9F9" }}>
          <div
            style={{
              marginRight: "auto",
              backgroundImage: `url(/images/logo2.png)`,
            }}
            className={classes.logo_div}
          ></div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List className={classes.drawer_list}>
          {drawerItems.map((item, index) => (
            <ListItem
              button
              key={index}
              className={`${classes.side_bar_item} ${
                activeItem === item.title ? classes.active : ""
              }`}
              onClick={() => {
                setActiveItem(item.title);
                router.push(item.link);
              }}
            >
              <ListItemIcon className={classes.side_bar_icon}>
                <Image
                  src={item.icon}
                  alt="logo_img"
                  width={16}
                  height={16}
                  className={classes.dashboard_sidebar_icon}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                className={classes.side_bar_title}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.content_row}>
        <DrawerHeader />
        {children}
      </div>
    </Box>
  );
};

export default DashBoardLayout;