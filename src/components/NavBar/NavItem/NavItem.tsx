interface INavItem {
  children: React.ReactNode;
  url: string;
}

const NavItem: React.FC<INavItem> = ({ children, url }) => {
  return <a href={url}>{children}</a>;
};

export default NavItem;
