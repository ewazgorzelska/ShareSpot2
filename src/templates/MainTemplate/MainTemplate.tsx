import React, { PropsWithChildren } from 'react';
import { MediaQuery, Paper } from '@mantine/core';
import NavBar from 'components/NavBar/NavBar';
import NavBarMobile from 'components/NavBar/NavBarMobile/NavBarMobile';

import './MainTemplate.styles.scss';

interface IMainTemplate {
  children: React.ReactNode;
}

const MainTemplate: React.FC<PropsWithChildren<IMainTemplate>> = ({
  children,
}) => {
  return (
    <>
      <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
        <div className='container'>
          <NavBar />
          <Paper className='paper' radius='sm' shadow='sm' p='md'>
            {children}
          </Paper>
        </div>
      </MediaQuery>
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <div className='container'>
          <NavBarMobile />
          {children}
        </div>
      </MediaQuery>
    </>
  );
};

export default MainTemplate;
