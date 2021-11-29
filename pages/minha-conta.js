import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { useEffect, useContext } from 'react';
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  ListItemText,
  TextField,
} from '@material-ui/core';
import { getError } from '../utils/error';
import { Store } from '../utils/Store';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';

function Profile() {
  const { state, dispatch } = useContext(Store);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const classes = useStyles();
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      return router.push('/login');
    }
    setValue('name', userInfo.name);
    setValue('email', userInfo.email);
  }, [router, setValue, userInfo]);
  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    closeSnackbar();
    if (password !== confirmPassword) {
      enqueueSnackbar('Senhas não são iguais', { variant: 'error' });
      return;
    }
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          password,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', data);

      enqueueSnackbar('Conta atualizada com sucesso', { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  return (
    <Layout title="Minha conta">
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <NextLink href="/minha-conta" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="Minha conta"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/meus-pedidos" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Meus pedidos"></ListItemText>
                </ListItem>
              </NextLink>
            </List>
          </Card>
        </Grid>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h1">Minha conta</Typography>
              </ListItem>
              <ListItem>
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  className={classes.form}
                >
                  <List>
                    <ListItem>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                          minLength: 2,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="name"
                            label="Nome"
                            inputProps={{ type: 'name' }}
                            error={Boolean(errors.name)}
                            helperText={
                              errors.name
                                ? errors.name.type === 'minLength'
                                  ? 'O nome precisa ter mais de um caractere'
                                  : 'Insira seu nome'
                                : ''
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
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
                                  ? 'O email não é válido'
                                  : 'Insira seu email'
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
                            label="Senha"
                            inputProps={{ type: 'password' }}
                            error={Boolean(errors.password)}
                            helperText={
                              errors.password
                                ? errors.password.type === 'minLength'
                                  ? 'A senha precisa ter no mínimo 8 caracteres'
                                  : 'Insira sua senha'
                                : ''
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="confirmPassword"
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
                            id="confirmPassword"
                            label="Confirmar senha"
                            inputProps={{ type: 'password' }}
                            error={Boolean(errors.confirmPassword)}
                            helperText={
                              errors.confirmPassword
                                ? errors.confirmPassword.type === 'minLength'
                                  ? 'Confirmar senha precisa ter no mínimo 8 caracteres'
                                  : 'Insira a confirmação de senha'
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
                        Atualizar
                      </Button>
                    </ListItem>
                  </List>
                </form>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
