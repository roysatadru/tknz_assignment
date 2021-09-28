import React from 'react';
import { Grid, Paper } from '@mui/material';

import ImageGallery from '../../components/ImageGallery';

const BuySection: React.FC = () => {
  return (
    <Grid item xs={12} container>
      <Grid item xs={6}>
        <ImageGallery />
      </Grid>
      <Grid item xs={6}>
        <Paper></Paper>
      </Grid>
    </Grid>
  );
};

export default BuySection;
