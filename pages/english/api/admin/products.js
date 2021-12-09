import nc from 'next-connect';
import Product from '../../../models/Product';
import { isAuth, isAdmin } from '../../../utils/auth';
import db from '../../../utils/db';
import { onError } from '../../../utils/error';

const handler = nc({
  onError,
});
handler.use(isAuth, isAdmin);

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
