import { styled, Paper } from '@mui/material';

const ContainerPaper = styled(Paper)(
  ({ theme }) => `
  padding: ${theme.spacing(
    '24vw',
    theme.typography.pxToRem(28),
    theme.typography.pxToRem(35),
    theme.typography.pxToRem(28),
  )};

  @media only screen and (max-width: 601px) {
    box-shadow: 0 0 2.5rem 0 rgb(147 150 161 / 20%), 0 0.09375rem 0.1875rem 0 rgb(255 255 255 / 15%) inset;
  }

  & > div {
    max-width: ${theme.typography.pxToRem(400)};
    margin: auto;

    ${theme.breakpoints.up('sm')} {
      max-width: "100%";
    }
  }

  ${theme.breakpoints.up('sm')} {
    padding: ${theme.spacing(
      theme.typography.pxToRem(35),
      theme.typography.pxToRem(28),
    )};
  }

  ${theme.breakpoints.up('md')} {
    padding: ${theme.spacing(
      theme.typography.pxToRem(28),
      theme.typography.pxToRem(28),
    )};
    height: 100%;
  }
`,
);

export default ContainerPaper;
