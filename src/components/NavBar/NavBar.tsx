import Logo from './Logo/Logo';
import NavItem from './NavItem/NavItem';
import { navItemsData } from './NavItem/data';
import './NavBar.styles.scss';

const NavBar = () => {
  return (
    <div className='menu'>
      <Logo />
      <div className='menu'>
        {navItemsData.map((item) => (
          <NavItem url={'/'} key={item}>
            {item}
          </NavItem>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
