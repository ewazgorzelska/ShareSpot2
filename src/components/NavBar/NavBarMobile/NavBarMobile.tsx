import { useState } from 'react';
import { Burger, Drawer } from '@mantine/core';
import Logo from '../Logo/Logo';

import './NavBarMobile.styles.scss';
import NavItem from '../NavItem/NavItem';

const NavBarMobile = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <div className='menu-container'>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
        aria-label='Open navigation'
        size='lg'
        styles={(theme) => ({
          root: {
            height: '150px',
            width: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.colors.secondary[0],
          },
        })}
      />
      <Logo />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Logo />}
        padding='xl'
        size='full'
        styles={(theme) => ({
          drawer: {
            backgroundColor: theme.colors.primary[0],
          },
          closeButton: {
            color: theme.colors.secondary[0],
            width: '48px',
            height: '48px',
            '&:hover': {
              backgroundColor: 'inherit',
            },
          },
        })}
      >
        <div className='mobile-container'>
          <NavItem url={'/'}>Section 1</NavItem>
          <NavItem url={'/'}>Section 1</NavItem>
          <NavItem url={'/'}>Section 1</NavItem>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBarMobile;
