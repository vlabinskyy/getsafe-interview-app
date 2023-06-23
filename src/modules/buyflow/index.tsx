import React from 'react';
import { useForm } from 'react-hook-form';
import { BuyflowProps } from './components/Buyflow/interfaces';
import { PRODUCT_IDS_TO_NAMES } from './constants';
import Buyflow from './components/Buyflow';

const BuyflowModule: React.FC<BuyflowProps> = (props) => {
  const { handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      <Buyflow productId={props.productId} />
    </form>
  );
};

export default BuyflowModule;
