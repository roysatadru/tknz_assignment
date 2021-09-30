import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Structure = styled(motion.div)(({ theme }) => ({
  display: 'grid',
  height: theme.typography.pxToRem(500),
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: '2fr repeat(2, 1fr)',
  gridAutoFlow: 'row',
  position: 'relative',
  gridGap: theme.typography.pxToRem(20),
  gap: theme.typography.pxToRem(20),
}));

export default Structure;
