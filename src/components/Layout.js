import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider as RebassProvider } from 'rebass';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import 'react-tippy/dist/tippy.css';
import config from 'react-reveal/globals';
import theme from '../theme';
import Helmet from './Helmet';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Cabin;
}
`;

config({ ssrFadeout: true });

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <RebassProvider theme={theme}>
      <ScrollingProvider>
        <Helmet />
        <Header />
        {children}
      </ScrollingProvider>
    </RebassProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
