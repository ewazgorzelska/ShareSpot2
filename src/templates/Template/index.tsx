import { Paper } from '@mantine/core';
import NavBar from 'components/NavBar';
import React, { PropsWithChildren } from 'react';

import './index.styles.scss';

interface ITemplate {
  children: React.ReactNode;
}

const Template: React.FC<PropsWithChildren<ITemplate>> = ({ children }) => {
  return (
    <div className='container'>
      <NavBar />
      <Paper className='paper' radius='sm' shadow='sm' p='md'>
        {children}
      </Paper>
    </div>
  );
};

export default Template;
