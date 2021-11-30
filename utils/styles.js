import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    justifyContent: 'center',
    alignItems: 'center',
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
  ctaDetails: {
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',
    backgroundColor: '#fff000',
    color: '#000',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff000',
    },
  },
  ctaCreate: {
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',
    backgroundColor: '#fff000',
    color: '#000',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff000',
    },
  },

  ctaEdit: {
    padding: '5px 11px 5px 10px',
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',
    backgroundColor: '#fff000',

    color: '#000',
    '& span': {
      margin: '0px 6px 0px 4px',
      alignItems: 'center',
    },
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff000',
    },
  },
  ctaDelete: {
    marginTop: 10,
    padding: '5px 10px 5px 10px',
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',

    backgroundColor: '#2d2d28',
    color: '#fff000',
    '&:hover': {
      backgroundColor: '#000',
    },
  },
  ctaDeleteUser: {
    padding: '6px 10px 5px 10px',
    fontFamily: "'Nunito Sans', sansSerif",
    fontWeight: 'bold',

    backgroundColor: '#2d2d28',
    color: '#fff000',
    '&:hover': {
      backgroundColor: '#000',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbar: {
    justifyContent: 'space-between',
    color: '#000',
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
    fontSize: '20px',
    fontWeight: '700',
    margin: '10px 10px -32px 0px',
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
  shippingTitle2: {
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
  menuButton: { padding: 0 },
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sort: {
    marginRight: 5,
  },
  searchForm: {
    backgroundColor: '#303030',
    color: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: '#ffffff',
    '& ::placeholder': {
      color: '#ffffff',
    },
  },
  iconButton: {
    backgroundColor: '#f000',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#fff000',
    },
  },
}));
export default useStyles;
