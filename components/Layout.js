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
  MenuItem,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Layout({ description, title, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const theme = createTheme({
    typography: {
      fontFamily: "'Nunito Sans', sansSerif,",
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#fff000',
      },
      secondary: {
        main: '#000',
      },
    },
  });
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
  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    router.push('/');
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
          <Toolbar>
            <Link href="/">
              <Image
                className={classes.brand}
                src="/logo.svg"
                width={130}
                height={60}
                alt=""
              />
            </Link>

            <div className={classes.grow}></div>
            <div>
              <Switch
                className={classes.switch}
                checked={darkMode}
                onChange={darkModeChangehandler}
              ></Switch>

              <Link href="/cart" className={classes.cart}>
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
                    <MenuItem onClick={loginMenuCloseHandler}>Perfil</MenuItem>
                    <MenuItem onClick={loginMenuCloseHandler}>
                      Minha conta
                    </MenuItem>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Link href="/login">
                  <Image src="/login.svg" width={24} height={50} alt="" />
                </Link>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>Todos direitos reservados. Decor.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
