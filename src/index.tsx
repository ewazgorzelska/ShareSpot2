import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { theme } from 'theme/theme';
import { RouterProvider } from 'react-router';
import { router } from 'routes/routes';
import Template from 'components/commons/Template';

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
      <Template>
        <RouterProvider router={router} />
      </Template>
    </MantineProvider>
  </React.StrictMode>,
);
