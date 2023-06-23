import React from 'react';
import { PRODUCT_IDS_TO_NAMES } from './constants';
import Buyflow from './components/Buyflow';
import { useParams } from 'react-router-dom';

const BuyflowModule: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  console.log(productId, 'productId');

  if (!PRODUCT_IDS_TO_NAMES[productId]) {
    return <span>'Sorry, this product does not exist!'</span>;
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      <Buyflow productId={productId} />
    </>
  );
};

export default BuyflowModule;
