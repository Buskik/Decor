import nc from 'next-connect';
import Product from '../../../models/Product';
import { isAuth, isAdmin } from '../../../utils/auth';
import db from '../../../utils/db';
import { onError } from '../../../utils/error';

const handler = nc({
  onError,
});
handler.use(isAuth, isAdmin);

handler.post(async (req, res) => {
  await db.connect();
  // criar um produto vazio e mandar o usuario pra tela do id daquele item
  const newProduct = new Product({
    name: 'Novo item',
    slug: 'novo-item',
    category: 'Categoria',
    image: 'img',
    price: 0,
    brand: 'marca',
    rating: 0,
    numReviews: 0,
    countInStock: 0,
    description: 'description',
    reviews: [],
  });

  const product = await newProduct.save();

  await db.disconnect();
  res.send({ product });
});

handler.put(async (req, res) => {
  await db.connect();

  res.send({});
});

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  console.log(products);
  await db.disconnect();
  res.send(products);
});

export default handler;
