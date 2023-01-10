import { Link } from 'react-router-dom';
import { Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';

interface INavItem {
  children: React.ReactNode;
  url: string;
}

const NavItem: React.FC<INavItem> = ({ children, url }) => {
  const { hovered, ref } = useHover();

  return (
    <Link to={url}>
      <Text
        span
        color='var(--mantine-color-brand-1)'
        weight={700}
        variant='text'
        ref={ref}
        underline={hovered}
        styles={{
          root: {
            '&:hover': {
              filter: 'drop-shadow(3px 3px 3px rgba(0,0,0,0.3))',
            },
          },
        }}
      >
        {children}
      </Text>
    </Link>
  );
};

export default NavItem;
