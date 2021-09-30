import React, { useState } from 'react';
import { Grid } from '@mui/material';

import ImageGallery from '../../containers/ImageGallery';
import { ImageModel } from '../../models/ImageModel';
import PackDescriptionCard from '../../containers/PackDescriptionCard';
import SectionStructure from './SectionStructure';

interface BuySectionProps {
  heading: string;
  subHeading: string;
  price: number;
  totalBought: string;
  packDetails: Array<string> | string;
  images: [ImageModel, ImageModel, ImageModel, ImageModel, ImageModel];
}

const BuySection: React.FC<BuySectionProps> = ({ images, ...props }) => {
  const [notHovered, setNotHovered] = useState<0 | true>(true);

  return (
    <SectionStructure>
      <Grid item xs={12} md={6}>
        <ImageGallery images={images} position={notHovered} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PackDescriptionCard
          {...props}
          onHoverButton={e => {
            e.stopPropagation();
            setNotHovered(curState => (curState ? 0 : true));
          }}
        />
      </Grid>
    </SectionStructure>
  );
};

export default BuySection;
