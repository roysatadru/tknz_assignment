import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Structure = styled(motion.div)(({ theme }) => ({
  marginBottom: '-18vw',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: `59vw 29.5vw`,
  gridRowGap: theme.typography.pxToRem(20),
  rowGap: theme.typography.pxToRem(30),
  justifyContent: 'center',

  [theme.breakpoints.up('sm')]: {
    marginBottom: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '2fr repeat(2, 1fr)',
    height: theme.typography.pxToRem(500),
    gridAutoFlow: 'row',
    position: 'relative',
    gridGap: theme.typography.pxToRem(20),
    gap: theme.typography.pxToRem(20),
  },
}));

export default Structure;
