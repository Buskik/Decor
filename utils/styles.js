import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#fff000',
    '& a': {
      paddingBottom: 8,
    },
  },
  switch: {
    margin: 0,
    float: 'left',
    marginTop: '8px',
  },
  cart: {
    marginRight: 0,
  },
  cartBadge: {
    marginLeft: '8px',
    marginRight: '-15px',
  },
  login: {},
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  productTitle2: {
    fontWeight: 'bold',
    fontSize: '30px',
  },
  card: {
    marginBottom: -25,
    padding: '3px 8px 20px 8px',
  },
  ctaProduct: {
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',
    backgroundColor: '#fff000',
    color: '#000',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff000',
    },
  },
  ctaProductList: {
    fontSize: '13px',
    borderRadius: 6,
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: '900',
    backgroundColor: '#fff000',
    color: '#000',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff000',
    },
    '& span': {
      margin: 0,
    },
  },
  productPrice: {
    fontSize: '20px',
    fontWeight: '700',
    padding: 0,
  },
});
export default useStyles;
