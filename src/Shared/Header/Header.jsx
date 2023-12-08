import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
/// React Icons
import { FaRegBookmark, FaShop } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineEventAvailable } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsChatRightText } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuUsers2 } from "react-icons/lu";
import { RiMemoriesFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import AccountMenu from "../../Pages/Home/AccountMenu/AccountMenu";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <div className="w-10/12 mx-auto py-5 space-y-6">
        <h3>
          <Link className="flex items-center gap-4" to="/profile">
            <RxAvatar className="text-3xl" /> User name
          </Link>
        </h3>
        <h3>
          <Link className="flex items-center gap-4" to="/friends">
            <LuUsers2 className="text-3xl" /> Friends
          </Link>
        </h3>
        <h3>
          <Link className="flex items-center gap-4" to="/events">
            <MdOutlineEventAvailable className="text-3xl" /> Events
          </Link>
        </h3>
        <h3>
          <Link to="/saved" className="flex items-center gap-4">
            <FaRegBookmark className="text-3xl" /> Saved{" "}
          </Link>
        </h3>
        <h3>
          <Link className="flex items-center gap-4" to="/video">
            <MdOutlineOndemandVideo className="text-3xl" /> Video
          </Link>
        </h3>
        <h3>
          <Link className="flex items-center gap-4" to="/memories">
            <RiMemoriesFill className="text-3xl" /> memories
          </Link>
        </h3>
      </div>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-white text-black">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={2}>
            <Grid className="flex items-center justify-evenly text-3xl text-black" item xs={8}>
              <Link to="/">
                <AiTwotoneHome />
              </Link>
              <Link to="/video">
                <MdOutlineOndemandVideo />
              </Link>
              <Link to="/shop">
                <FaShop />
              </Link>
              <Link to="/profile">
                <RxAvatar />
              </Link>
            </Grid>
            <Grid item xs={4} className="flex items-center justify-evenly text-3xl text-black">
              <CgMenuGridR />
              <BsChatRightText />
              <IoMdNotificationsOutline />
              <AccountMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Header;
