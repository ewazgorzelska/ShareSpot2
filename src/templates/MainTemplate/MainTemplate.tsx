import React, { PropsWithChildren } from 'react';
import { AppShell, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import NavBar from 'components/NavBar/NavBar';
import NavBarMobile from 'components/NavBar/NavBarMobile/NavBarMobile';

interface IMainTemplate {
  children: React.ReactNode;
}

const MainTemplate: React.FC<PropsWithChildren<IMainTemplate>> = ({
  children,
}) => {
  const mediumScreen = useMediaQuery('(min-width: 767px)');
  const largeScreen = useMediaQuery('(min-width: 900px)');
  return (
    <AppShell
      padding='sm'
      header={mediumScreen ? <NavBar /> : <NavBarMobile />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colors.brand[0] },
      })}
    >
      <Container
        p='md'
        size={largeScreen ? 'md' : 'xs'}
        bg='white'
        h={mediumScreen ? '50%' : '70%'}
      >
        {children}
      </Container>
    </AppShell>
  );
};

export default MainTemplate;
