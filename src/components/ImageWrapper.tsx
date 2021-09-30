import { styled } from '@mui/material/styles';
import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion';

export default styled<
  ForwardRefComponent<
    HTMLDivElement,
    HTMLMotionProps<'div'> & {
      height?: string | number;
      width?: string | number;
    }
  >
>(motion.div)(({ height = '100%', width = '100%' }) => ({
  overflow: 'hidden',
  height,
  width,

  '& img': {
    display: 'block',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
}));
