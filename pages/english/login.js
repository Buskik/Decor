/* eslint-disable react/no-unescaped-entities */
import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Link,
} from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import Layout from '../../components/LayoutEnglish';
import { Store } from '../../utils/Store';
import useStyles from '../../utils/styles';
import { useRouter } from 'next/dist/client/router';
import { getError } from '../../utils/error';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push('/english');
    }
  }, [router, userInfo]);
  const classes = useStyles();
  const submitHandler = async ({ email, password }) => {
    closeSnackbar();
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });

      Cookies.set('userInfo', JSON.stringify(data));
      router.push(redirect || '../english');
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  return (
    <Layout title="Login">
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography
          align="center"
          component="h1"
          className={classes.loginTitle}
        >
          Hello, welcome!
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  inputProps={{ type: 'email' }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === 'pattern'
                        ? 'Invalid email'
                        : 'Insert your email'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 8,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="Password"
                  inputProps={{ type: 'password' }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === 'minLength'
                        ? 'Password must be at least 8 characters long.'
                        : 'Enter your password'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button
              className={classes.ctaProduct}
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
            >
              Login
            </Button>
          </ListItem>
          <ListItem>
            Doesn't have an account?&nbsp;
            <Link href={`english/register?redirect=${redirect || '/english'}`}>
              Register
            </Link>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
