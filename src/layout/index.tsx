import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import { Global, css } from '@emotion/react';
import { useTheme } from '@mui/system';
import { Grid } from '@mui/material';

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
        <Grid item xs={8} container>
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
          ${theme.breakpoints.up('xl')}: {},
        }
      `}
    />
  );
};
