import { useState } from 'react';
import { Burger, Drawer, Flex } from '@mantine/core';
import Logo from '../Logo/Logo';
import NavItem from '../NavItem/NavItem';
import './NavBarMobile.styles.scss';
import { navItemsData } from '../NavItem/data';

const NavBarMobile = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Flex justify='space-between' bg='var(--mantine-color-brand-0)'>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
        aria-label='Open navigation'
        size='lg'
        styles={{
          root: {
            height: '150px',
            width: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
      <Logo />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Logo />}
        padding='xl'
        size='full'
        styles={{
          drawer: {
            backgroundColor: 'var(--mantine-color-brand-0)',
          },
          closeButton: {
            color: 'var(--mantine-color-brand-1)',
            width: '48px',
            height: '48px',
            '&:hover': {
              backgroundColor: 'inherit',
            },
          },
        }}
      >
        <Flex justify='center' align='center' gap='50px' direction='column'>
          {navItemsData.map((item) => (
            <NavItem url={'/'} key={item}>
              {item}
            </NavItem>
          ))}
        </Flex>
      </Drawer>
    </Flex>
  );
};

export default NavBarMobile;
