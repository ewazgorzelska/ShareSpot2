import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { theme } from 'theme/theme';
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
      theme={theme}
    >
      <MainTemplate>
        <RouterProvider router={router} />
      </MainTemplate>
    </MantineProvider>
  </React.StrictMode>,
);
