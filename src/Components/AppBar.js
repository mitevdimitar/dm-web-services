import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { Link, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { MENU_ITEMS } from '../Utils/constants';
import HandymanIcon from '@mui/icons-material/Handyman';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    position: "sticky !important"
  },
  pageLink: {
    color: "white !important",
    marginRight: "20px !important",
    textTransform: "uppercase",
    fontSize: "15px"
  },
  pageLinkMobile: {
    padding: "5px 10px",
    fontSize: "1.2rem !important"
  },
  mobileMenu: {
    width: "50%",
    left: 5
  }
}));

const pages = Object.values(MENU_ITEMS);

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderIcon = (menuItem) => {
    switch(menuItem) {
      case MENU_ITEMS.HOME:
        return <HomeIcon />
      case MENU_ITEMS.SERVICES:
        return <HandymanIcon />
      case MENU_ITEMS.TEAM:
        return <GroupsIcon />
      case MENU_ITEMS.CONTACTS:
        return <ContactMailIcon />
      default:
        return null
    }
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              disableScrollLock={ true }
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
              classes={{
                paper: classes.mobileMenu
              }}
            >
              {pages.map((page) => (
                <MenuItem>
                  {renderIcon(page)}
                  <Link key={page} underline="none" onClick={handleCloseNavMenu} href={`#${page}`}>
                    <Typography className={classes.pageLinkMobile}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} underline="none" href={`#${page}`} className={classes.pageLink}>
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuBar;