import {
  Grid,
  useTheme,
  styled,
  GridProps,
  useMediaQuery,
} from '@mui/material';

const SectionStructure = styled(
  (
    props: Omit<
      GridProps,
      'container' | 'spacing' | 'alignItems' | 'justifyContent'
    >,
  ): JSX.Element => {
    const { typography, breakpoints } = useTheme();

    const matchesUpMd = useMediaQuery(breakpoints.up('md'), {
      defaultMatches: document.body.getBoundingClientRect().width >= 900,
    });

    return (
      <Grid
        {...props}
        container
        spacing={matchesUpMd ? typography.pxToRem(32) : typography.pxToRem(20)}
        alignItems="stretch"
        justifyContent="center"
      />
    );
  },
)(
  ({ theme }) => `  
  ${theme.breakpoints.up('sm')} {
    max-width: ${theme.typography.pxToRem(500)};
  }

  ${theme.breakpoints.up('md')} {
    max-width: ${theme.typography.pxToRem(880)};
  }
`,
);

export default SectionStructure;
