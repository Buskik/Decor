import React, { useContext } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Store } from '../utils/Store';

export default function Shipping() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  if (!userInfo) {
    router.push('/login?redirect=/shipping');
  }
  return <div>Página de entrega</div>;
}
