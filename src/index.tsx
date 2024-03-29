import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router';
import { router } from 'routes/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: () => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          a: {
            textDecoration: 'none',
          },
        }),
        colors: {
          brand: ['#66a2ba', '#070A0D'],
        },
        primaryColor: 'brand',
        components: {
          Anchor: {
            styles: (theme) => ({
              root: {
                '&:hover': {
                  color: theme.fn.darken(theme.colors.brand[1], 1),
                },
              },
            }),
          },
          Button: {
            styles: (theme) => ({
              root: {
                backgroundColor: 'var(--mantine-color-brand-1)',
                '&:hover': {
                  filter: 'drop-shadow(3px 3px 3px rgba(0,0,0,0.3))',
                },
              },
            }),
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);
