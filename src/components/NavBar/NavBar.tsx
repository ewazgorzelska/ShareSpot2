import { Flex } from '@mantine/core';
import Logo from './Logo/Logo';
import NavItem from './NavItem/NavItem';
import { navItemsData } from './NavItem/data';

const NavBar = () => {
  return (
    <Flex
      gap='xl'
      justify='space-around'
      align='center'
      bg='var(--mantine-color-brand-0)'
    >
      <Logo />
      <Flex gap='100px' justify='center' align='center'>
        {navItemsData.map((item) => (
          <NavItem url={'/'} key={item}>
            {item}
          </NavItem>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavBar;
