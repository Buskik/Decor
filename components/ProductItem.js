import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
import Rating from '@material-ui/lab/Rating';
import useStyles from '../utils/styles';

export default function ProductItem({ product, addToCartHandler }) {
  const classes = useStyles();
  return (
    <Card>
      <NextLink href={`/produtos/${product.slug}`} passHref>
        <CardActionArea className={classes.cardActionArea}>
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
            <Typography align="right" className={classes.productPrice}>
              {'R$'}
              {product.price}
            </Typography>
            <Rating value={product.rating} size="large" readOnly></Rating>
          </CardContent>
          <CardActions disableSpacing="true" className={classes.cardActions}>
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
        </CardActionArea>
      </NextLink>
    </Card>
  );
}
