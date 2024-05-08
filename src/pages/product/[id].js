
import React from 'react';
import { useRouter } from 'next/router';
import { getProductById } from '../api/products';

export default function ProductPage({ product }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const product = await getProductById(params.id);
  return {
    props: {
      product,
    },
  };
}
