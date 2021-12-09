import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Store } from '../../utils/Store';
import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

import Layout from '../../components/LayoutEnglish';
import useStyles from '../../utils/styles';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import CheckoutWizard from '../../components/CheckoutWizard';

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
      router.push('../english/login?redirect=../english/order');
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
    router.push('../english/payment');
  };
  return (
    <Layout title="Shipping address">
      <CheckoutWizard activeStep={1} />
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography
          align="center"
          className={classes.shippingTitle}
          component="h1"
        >
          Shipping address
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
                  label="Full name"
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === 'minLength'
                        ? 'Full name must be at least two characters long.'
                        : 'Enter your full name'
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
                  label="Address"
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === 'minLength'
                        ? 'The address must be at least two characters long'
                        : 'Enter your address'
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
                  label="City"
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === 'minLength'
                        ? 'The city must have at least two characters'
                        : 'Enter your city'
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
                  label="State"
                  error={Boolean(errors.state)}
                  helperText={
                    errors.state
                      ? errors.state.type === 'minLength'
                        ? 'The state must be at least two characters long'
                        : 'Enter your state'
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
                  label="Postal Code"
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? (errors.postalCode.type === 'minLength') === 'maxLength'
                        ? 'Invalid Postal Code'
                        : 'Invalid Postal Code'
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
              Next
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
