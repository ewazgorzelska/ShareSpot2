import { Link } from 'react-router-dom';
import { Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Logo = () => {
  const mediumScreen = useMediaQuery('(min-width: 767px)');
  return (
    <Link to='/'>
      <Image
        height={mediumScreen ? '200px' : '150px'}
        width={mediumScreen ? '200px' : '150px'}
        src={
          mediumScreen ? 'assets/logo-primary.png' : 'assets/logo-mobile.png'
        }
        alt='logo'
      />
    </Link>
  );
};

export default Logo;
