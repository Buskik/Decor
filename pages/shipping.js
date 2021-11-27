import React, { useContext } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Store } from '../utils/Store';

export default function Shipping() {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  if (!userInfo) {
    router.push('/login?redirect=/shipping');
  }
  return <div>Página de entrega</div>;
}
