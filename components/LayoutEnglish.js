import React, { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Link,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
  Badge,
  Button,
  Menu,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  MenuItem,
  InputBase,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import { useSnackbar } from 'notistack';
import NextLink from 'next/link';
import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { getError } from '../utils/error';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Grid } from '@mui/material';

export default function Layout({ description, title, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const theme = createTheme({
    overrides: {
      MuiStepper: {
        root: {
          marginTop: 10,
          borderRadius: 10,
        },
      },
    },
    typography: {
      fontFamily: "'Nunito Sans', sansSerif,",
    },
    palette: {
      type: darkMode ? 'light' : 'dark',
      primary: {
        main: '#fff000',
      },
      secondary: {
        main: '#000',
      },
    },
  });

  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/english/search?query=${query}`);
  };

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();
  const darkModeChangehandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    router.push('english/');
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Decor` : 'Decor'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar className={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <IconButton
                color="secondary"
                edge="start"
                aria-label="open drawer"
                onClick={sidebarOpenHandler}
                className={classes.menuButton}
              >
                <MenuIcon className={classes.navbarButton} />
              </IconButton>
              <Link href="/english">
                <Image
                  className={classes.brand}
                  src="/logo.svg"
                  width={130}
                  height={60}
                  alt=""
                />
              </Link>
            </Box>
            <Drawer
              anchor="left"
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
            >
              <List>
                <ListItem>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>NAVIGATE</Typography>
                    <IconButton
                      aria-label="close"
                      onClick={sidebarCloseHandler}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                <NextLink href={`/english/search`} passHref>
                  <ListItem button component="a" onClick={sidebarCloseHandler}>
                    <ListItemText>Products</ListItemText>
                  </ListItem>
                </NextLink>
                <NextLink href={`../english/what-are-we`} passHref>
                  <ListItem button component="a" onClick={sidebarCloseHandler}>
                    <ListItemText>What are we</ListItemText>
                  </ListItem>
                </NextLink>
                <NextLink href={`../english/contact`} passHref>
                  <ListItem button component="a" onClick={sidebarCloseHandler}>
                    <ListItemText>Contact</ListItemText>
                  </ListItem>
                </NextLink>
              </List>
            </Drawer>
            <div className={classes.searchSection}>
              <form onSubmit={submitHandler} className={classes.searchForm}>
                <InputBase
                  name="query"
                  className={classes.searchInput}
                  placeholder="Search items"
                  onChange={queryChangeHandler}
                />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </form>
            </div>
            <div className={classes.grow}></div>
            <div>
              <Switch
                className={classes.switch}
                checked={!darkMode}
                onChange={darkModeChangehandler}
              ></Switch>

              <Link href="english/cart" className={classes.cart}>
                {cart.cartItems.length > 0 ? (
                  <Badge
                    className={classes.cartBadge}
                    color="secondary"
                    badgeContent={cart.cartItems.length}
                  ></Badge>
                ) : (
                  ''
                )}
                <Image src="/cart.svg" width={50} height={50} alt="" />
              </Link>

              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    className={classes.login}
                  >
                    <Image src="/login.svg" width={24} height={50} alt="" />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onclose={loginMenuCloseHandler}
                  >
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/english/my-account')
                      }
                    >
                      My account
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/english/my-orders')
                      }
                    >
                      My orders
                    </MenuItem>
                    <MenuItem onClick={(e) => loginMenuCloseHandler(e, '../')}>
                      Mudar para português
                    </MenuItem>
                    {userInfo.isAdmin && (
                      <MenuItem
                        onClick={(e) =>
                          loginMenuCloseHandler(e, '/english/admin/dashboard')
                        }
                      >
                        Dashboard
                      </MenuItem>
                    )}
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Link href="/english/login">
                  <Image src="/login.svg" width={24} height={50} alt="" />
                </Link>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved, Decor. ©2021</Typography>

          <Grid className={classes.footerGrid} container spacing={3}>
            <Grid item md={4}>
              <Link className={classes.footerLink} href="/what-are-we">
                What are we
              </Link>
              <Link href="/contact">Contact</Link>
            </Grid>
          </Grid>
        </footer>
      </ThemeProvider>
    </div>
  );
}
