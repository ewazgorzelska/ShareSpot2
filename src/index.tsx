import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router';
import { router } from 'routes/routes';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

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
        colors: {
          brand: ['#66a2ba', '#243a47'],
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
        },
      }}
    >
      <MainTemplate>
        <RouterProvider router={router} />
      </MainTemplate>
    </MantineProvider>
  </React.StrictMode>,
);
