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
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({ description, title, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
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
              <Link href="/login" className={classes.login}>
                <Image src="/login.svg" width={24} height={50} alt="" />
              </Link>
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
