import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { useEffect, useContext, useReducer } from 'react';
import {
  CircularProgress,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { getError } from '../../utils/error';
import { Store } from '../../utils/Store';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

function AdminOrders() {
  const { state } = useContext(Store);
  const router = useRouter();
  const classes = useStyles();
  const { userInfo } = state;

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: '',
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/orders`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [router, userInfo]);
  return (
    <Layout title="Pedidos">
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <NextLink href="/admin/dashboard" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Dashboard"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/pedidos" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="Pedidos"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/produtos" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Produtos"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/admin/usuarios" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Usuários"></ListItemText>
                </ListItem>
              </NextLink>
            </List>
          </Card>
        </Grid>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h1" className={classes.shippingTitle2}>
                  Pedidos
                </Typography>
              </ListItem>

              <ListItem>
                {loading ? (
                  <CircularProgress />
                ) : error ? (
                  <Typography className={classes.error}>{error}</Typography>
                ) : (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>DATA</TableCell>
                          <TableCell>VALOR</TableCell>
                          <TableCell>PAGAMENTO</TableCell>
                          <TableCell>ENTREGA</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order._id}>
                            <TableCell>{order._id.substring(20, 24)}</TableCell>
                            <TableCell>{order.createdAt}</TableCell>
                            <TableCell>R${order.totalPrice}</TableCell>
                            <TableCell>
                              {order.isPaid
                                ? `Pagamento efetuado em ${order.paidAt}`
                                : 'Pagamento não efetuado'}
                            </TableCell>
                            <TableCell>
                              {order.isDelivered
                                ? `Entregue em ${order.deliveredAt}`
                                : 'Não entregue'}
                            </TableCell>
                            <TableCell>
                              <NextLink href={`/order/${order._id}`} passHref>
                                <Button
                                  className={classes.ctaDetails}
                                  variant="contained"
                                >
                                  Detalhes
                                </Button>
                              </NextLink>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(AdminOrders), { ssr: false });
