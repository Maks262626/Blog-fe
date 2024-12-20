import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { sidebarLinks } from "@/routes";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarWidth } from "@/constants";

const SideBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box
      sx={{
        height: '100svh',
        bgcolor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          width: '100%',
          marginBottom: '24px',
        }}
      >
        <Box
          sx={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #ffffff',
          }}
        >
          <img
            src="/logo.png"
            alt="logo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          WordSmith
        </Typography>
      </Box>

      <Box sx={{ width: '100%', mt: 2 }}>

        <List>
          {sidebarLinks.map((link, idx) => {
            return <Link 
              key={idx} 
              to={link.route} 
              style={{ textDecoration: 'none', color: 'inherit' }}
              >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <link.icon />
                  </ListItemIcon>
                  <ListItemText primary={link.label.toUpperCase()} />
                </ListItemButton>
              </ListItem>
            </Link>
          })}
        </List>
      </Box>
    </Box>
  )
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { xs: `100%`, md: `calc(100% - ${sidebarWidth}px)` },
          bgcolor: 'secondary.main',

        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            {activeLink && activeLink.label}
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { md: sidebarWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default SideBar;
