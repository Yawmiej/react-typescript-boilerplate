import * as React from 'react';
import PropTypes from 'prop-types';
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import theme from '@chakra-ui/theme';

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {children}
  </ChakraProvider>
);

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
