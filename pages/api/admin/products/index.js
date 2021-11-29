import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import Product from '../../../../models/Product';
import db from '../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

handler.post(async (req, res) => {
  await db.connect();
  const newProduct = new Product({
    name: 'exemplo de nome',
    slug: 'exemplo-slug' + Math.random(),
    image: '/images/mesa1.jpg',
    price: 0,
    category: 'exemplo de categoria',
    brand: 'exemplo de marca',
    countInStock: 0,
    description: 'exemplo de descrição',
    rating: 0,
    numReviews: 0,
  });

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: 'Produto criado', product });
});

export default handler;
