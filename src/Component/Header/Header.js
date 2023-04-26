import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Avatar, Badge } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { getToken, logout } from "../../utils/auth.util";

const drawerWidth = 240;
const navItems = [
  { header: "Dashboard", path: "/dashboard" },
  { header: "Home", path: "/home" },
  { header: "About", path: "/about" },
  { header: "Contact", path: "/contact" }
];

const Header = (props) => {
  const { window } = props;
  const data = getToken();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, cursor: "pointer" }} onClick={() => navigate('/dashboard')}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems?.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item?.path)}
            >
              <ListItemText primary={item?.header} />
            </ListItemButton>
          </ListItem>
        ))}
        {data && (
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => logout()}
            >
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ p: { xs: "0px !important", background: "#000000" } }}
      >
        <Toolbar sx={{ display: { xs: "flex" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { /* xs: 'none', */ sm: "flex" },
              ml: { sm: 12, xs: 0 },
              cursor: "pointer"
            }}
            onClick={() => navigate('/dashboard')}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems?.map((item, i) => (
              <Button
                key={i}
                sx={{ color: "#fff" }}
                onClick={() => navigate(item?.path)}
              >
                {item?.header}
              </Button>
            ))}
            {/* <Button sx={{ color: "#fff", minWidth: 0 }}>
              <Badge badgeContent={4} color="primary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </Button> */}
            {data ? (
              <Button sx={{ color: "#fff" }} onClick={() => logout()}>
                LogOut
              </Button>
            ) : (
              <Button sx={{ color: "#fff" }} onClick={() => navigate("/")}>
                login
              </Button>
            )}
          </Box>
          {data && (
            <Box sx={{ cursor: "pointer" }}>
              {/* <Badge badgeContent={4} color="primary"> */}
                <Avatar
                  alt="Remy Sharp"
                  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1681302827~exp=1681303427~hmac=5abb418019f773ebad3154a3e09e2564298867d6bfbf9a9a8bf2706c5094f2b8"
                />
              {/* </Badge> */}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 4 }}></Box>
    </Box>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default Header;
  