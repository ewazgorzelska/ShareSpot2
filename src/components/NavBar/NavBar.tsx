import Logo from './Logo/Logo';
import NavItem from './NavItem/NavItem';
import './NavBar.styles.scss';

const NavBar = () => {
  return (
    <div className='menu'>
      <Logo />
      <NavItem url='/'>About App</NavItem>
      <NavItem url='/'>MySpots</NavItem>
      <NavItem url='/'>MyAccount</NavItem>
    </div>
  );
};

export default NavBar;
