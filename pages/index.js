import {
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import Product from '../models/Product';
import db from '../utils/db';
import useStyles from '../utils/styles';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';

export default function Home(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { products } = props;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Desculpe, produto esgotado');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  const classes = useStyles();
  return (
    <Layout className={classes.layout}>
      <div>
        <h1>Produtos</h1>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item md={3} key={product.name}>
              <Card>
                <NextLink href={`/produtos/${product.slug}`} passHref>
                  <CardActionArea classNmae={classes.cardActionArea}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent className={classes.card}>
                      <Typography
                        className={classes.productTitle2}
                        component="h1"
                        align="center"
                      >
                        {product.name}
                      </Typography>
                      <CardActions
                        disableSpacing="true"
                        className={classes.cardActions}
                      >
                        <Typography className={classes.productPrice}>
                          R${product.price}
                        </Typography>

                        <Button
                          className={classes.ctaProductList}
                          size="small"
                          color="secondary"
                          variation="button"
                          onClick={() => addToCartHandler(product)}
                        >
                          {' '}
                          Adicionar ao carrinho
                        </Button>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
