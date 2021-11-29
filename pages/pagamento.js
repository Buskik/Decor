import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import {
  Button,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';
import useStyles from '../utils/styles';

import { useSnackbar } from 'notistack';

export default function Payment() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyles();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;
  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/pedido');
    } else {
      setPaymentMethod(Cookies.get('paymentMethod') || '');
    }
  }, [router, shippingAddress.address]);
  const submitHandler = (e) => {
    closeSnackbar();
    e.preventDefault();
    if (!paymentMethod) {
      enqueueSnackbar('Insira uma forma de pagamento', { variant: 'error' });
    } else {
      dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
      Cookies.set('paymentMethod', paymentMethod);
      router.push('/finalizar-compra');
    }
  };
  return (
    <Layout title="Forma de pagamento">
      <CheckoutWizard activeStep={2}></CheckoutWizard>
      <form className={classes.form} onSubmit={submitHandler}>
        <Typography
          component="h1"
          align="center"
          className={classes.paymentTitle}
        >
          Forma de pagamento
        </Typography>
        <List>
          <ListItem>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="Forma de pagamento"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  label="PayPal"
                  value="PayPal"
                  control={<Radio color="primary" />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Dinheiro"
                  value="Cash"
                  control={<Radio color="primary" />}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
            <Button
              className={classes.ctaPayment}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Avançar
            </Button>
          </ListItem>
          <ListItem>
            <Button
              className={classes.ctaPaymentBack}
              fullWidth
              type="button"
              variant="contained"
              onClick={() => router.push('/pedido')}
            >
              Voltar
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
