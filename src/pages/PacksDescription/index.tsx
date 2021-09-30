import React from 'react';

import Layout from '../../layout';
import BuySection from './BuySection';
import { ImageModel } from '../../models/ImageModel';

import * as Images from './media';

const packItem = {
  heading: 'League of Legends',
  subHeading: '5 card in packs',
  totalBought: '35 563 Total',
  price: 49,
  packDetails: [
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
  ],
  images: Object.values(Images).reduce<Array<ImageModel>>(
    (prevValue, { default: def }) => {
      const fileName = def.split('/')[def.split('/').length - 1];
      const altText = fileName.split('.')[1].split('-').join(' ');

      const item = {
        url: def,
        altText,
      };

      const storePrevious = [...prevValue];

      storePrevious[+fileName.split('.')[0] - 1] = item;

      return storePrevious;
    },
    [],
  ) as [ImageModel, ImageModel, ImageModel, ImageModel, ImageModel],
};

const PacksDescription: React.FC = () => {
  return (
    <Layout>
      <BuySection {...packItem} />
    </Layout>
  );
};

export default PacksDescription;
