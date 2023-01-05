import { Anchor } from '@mantine/core';

interface INavItem {
  children: React.ReactNode;
  url: string;
}

const NavItem: React.FC<INavItem> = ({ children, url }) => {
  return (
    <Anchor
      href={url}
      color='var(--mantine-color-brand-1)'
      weight={700}
      variant='text'
      styles={(theme) => ({
        '&:hover': {
          color: theme.fn.lighten('var(--mantine-color-brand-1)', 0.5),
        },
      })}
    >
      {children}
    </Anchor>
  );
};

export default NavItem;
