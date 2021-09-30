import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import { Global, css } from '@emotion/react';
import { Grid, useTheme } from '@mui/material';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const WrapperComponent: React.FC<{ children: React.ReactNode }> = styled(
  props => (
    <Grid container alignItems="center" justifyContent="center" {...props} />
  ),
)(({ theme }) => ({
  minHeight: '100vh',

  [theme.breakpoints.up('xl')]: {},
}));

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'TKNZ Assignment',
  ...props
}) => {
  const { typography } = useTheme();

  return (
    <div
      style={{
        height: '100vh',
        color: '#ffffff',
      }}
      {...props}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <WrapperComponent>
        <Grid item container style={{ maxWidth: typography.pxToRem(880) }}>
          {/* Base Container to set the layout and breakpoints */}
          {children}
        </Grid>
      </WrapperComponent>
    </div>
  );
};

export default Layout;

export const GlobalComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          @media only screen and (min-width: 1350px) {
            font-size: 110%;
          }

          ${theme.breakpoints.up('xl')} {
            font-size: 130%;
          }

          @media only screen and (min-width: 1600px) {
            font-size: 150%;
          }
        }

        ::selection {
          background-color: ${theme.palette.secondary.main};
          color: #000;
        }
      `}
    />
  );
};
