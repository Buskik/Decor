import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  TextField,
  CircularProgress,
  ListItem,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import Layout from '../../../components/LayoutEnglish';
import useStyles from '../../../utils/styles';
import Product from '../../../models/Product';
import db from '../../../utils/db';
import { Store } from '../../../utils/Store';
import { getError } from '../../../utils/error';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/dist/client/router';

export default function ProductScreen(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const { product } = props;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `../api/products/${product._id}/reviews`,
        {
          rating,
          comment,
        },
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      setLoading(false);
      enqueueSnackbar('Avaliação enviada com sucesso', { variant: 'success' });
      fetchReviews();
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`/api/products/${product._id}/reviews`);
      setReviews(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry, product out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('../cart');
  };
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/english" passHref>
          <Link>
            <Typography>back</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            layout="responsive"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography className={classes.productTitle} component="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Rating value={product.rating} readOnly></Rating>
              <Link href="#reviews">
                <Typography>({product.numReviews} reviews)</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>R$ {product.price}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Availability:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {' '}
                      {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  className={classes.ctaProduct}
                  fullWidth
                  variant="contained"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      <List>
        <ListItem>
          <Typography
            className={classes.productTitle}
            name="reviews"
            id="reviews"
          >
            Reviews
          </Typography>
        </ListItem>
        {reviews.length === 0 && <ListItem>No reviews</ListItem>}
        {reviews.map((review) => (
          <ListItem key={review._id}>
            <Grid container>
              <Grid item className={classes.reviewItem}>
                <Typography>
                  <strong>{review.name}</strong>
                </Typography>
                <Typography>{review.createdAt.substring(0, 10)}</Typography>
              </Grid>
              <Grid item>
                <Rating value={review.rating} readOnly></Rating>
                <Typography>{review.comment}</Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
        <ListItem>
          {userInfo ? (
            <form onSubmit={submitHandler} className={classes.reviewForm}>
              <List>
                <ListItem>
                  <Typography className={classes.productTitle}>
                    Write your review
                  </Typography>
                </ListItem>
                <ListItem>
                  <TextField
                    multiline
                    variant="outlined"
                    fullWidth
                    name="review"
                    label="Write a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <Button
                    className={classes.ctaProduct}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Enviar
                  </Button>

                  {loading && <CircularProgress></CircularProgress>}
                </ListItem>
              </List>
            </form>
          ) : (
            <Typography>
              Please{' '}
              <Link href={`/login?redirect=/products/${product.slug}`}>
                log in
              </Link>{' '}
              to write a review
            </Typography>
          )}
        </ListItem>
      </List>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }, '-reviews').lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
