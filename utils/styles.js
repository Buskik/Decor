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
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  cart: {
    marginRight: 0,
  },
  cartBadge: {
    marginLeft: '8px',
    marginRight: '-15px',
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  login: {
    padding: 0,
    float: 'right',
    minWidth: 0,
    textTransform: 'initial',
  },
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
  cartTitle2: {
    fontWeight: 'bold',
    fontSize: '30px',
  },
  card: {
    marginBottom: -25,
    padding: '3px 8px 35px 8px',
  },
  cardArea: {
    marginBottom: -25,
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
  ctaShipping: {
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',
    backgroundColor: '#fff000',
    color: '#000',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff000',
    },
  },
  ctaPayment: {
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',
    backgroundColor: '#fff000',
    color: '#000',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff000',
    },
  },
  ctaPaymentBack: {
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',
    backgroundColor: '#424242',

    color: '#fff000',
    '&:hover': {
      backgroundColor: '#000',
    },
  },

  ctaOrderBack: {
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',
    backgroundColor: '#424242',

    color: '#fff000',
    '&:hover': {
      backgroundColor: '#000',
    },
  },
  ctaOrder: {
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',
    backgroundColor: '#fff000',
    color: '#000',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff000',
    },
  },
  cardActions: {
    marginRight: 0,
  },
  ctaProductList: {
    fontSize: '13px',
    borderRadius: 6,
    width: '80%',
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
    color: '#5aff00',
    fontSize: '15px',
    fontWeight: '700',
    marginRight: 10,
    padding: 0,
  },
  font: {
    maxWidth: 800,
    margin: '0 auto',
  },
  loginTitle: {
    marginTop: '15px',
    fontWeight: 'bold',
    fontSize: '30px',
  },
  registerTitle: {
    marginTop: '15px',
    fontWeight: 'bold',
    fontSize: '30px',
  },
  paymentTitle: {
    marginTop: '15px',
    fontWeight: 'bold',
    fontSize: '30px',
  },
  placeOrderTitle: {
    marginTop: '15px',
    fontWeight: 'bold',
    fontSize: '30px',
  },
  shippingTitle: {
    marginTop: '15px',
    fontWeight: 'bold',
    fontSize: '30px',
  },
  cartEmpty: {
    marginTop: '10px',
    '& a': {
      fontWeight: 'bold',

      textDecoration: 'none',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
  cartTitle: {
    fontWeight: 'bold',
    fontSize: '30px',
    marginTop: 20,
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
});
export default useStyles;
