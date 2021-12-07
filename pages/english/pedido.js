import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Store } from '../utils/Store';
import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import CheckoutWizard from '../components/CheckoutWizard';

export default function Shipping() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/pedido');
    }
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('state', shippingAddress.state);
  }, [
    router,
    setValue,
    shippingAddress.address,
    shippingAddress.city,
    shippingAddress.fullName,
    shippingAddress.postalCode,
    shippingAddress.state,
    userInfo,
  ]);

  const classes = useStyles();
  const submitHandler = ({ fullName, address, city, postalCode, state }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, state },
    });
    Cookies.set('shippingAddress', {
      fullName,
      address,
      city,
      postalCode,
    });
    router.push('/pagamento');
  };
  return (
    <Layout title="Endereço de entrega">
      <CheckoutWizard activeStep={1} />
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography
          align="center"
          className={classes.shippingTitle}
          component="h1"
        >
          Endereço de entrega
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
              control={control}
              defaultVale=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Nome completo"
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === 'minLength'
                        ? 'O nome completo precisa ter no mínimo duas caracteres'
                        : 'Insira o seu nome completo'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="address"
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
                  id="address"
                  label="Endereço"
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === 'minLength'
                        ? 'O endereço precisa ter no mínimo duas caracteres'
                        : 'Insira o seu endereço'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
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
                  id="city"
                  label="Cidade"
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === 'minLength'
                        ? 'A cidade precisa ter no mínimo duas caracteres'
                        : 'Insira a sua cidade'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="state"
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
                  id="state"
                  label="Estado"
                  error={Boolean(errors.state)}
                  helperText={
                    errors.state
                      ? errors.state.type === 'minLength'
                        ? 'O estado precisa ter no mínimo duas caracteres'
                        : 'Insira o seu estado'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 8,
                maxLength: 8,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="CEP"
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? (errors.postalCode.type === 'minLength') === 'maxLength'
                        ? 'CEP inválido'
                        : 'CEP inválido'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button
              className={classes.ctaShipping}
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
            >
              Avançar
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
