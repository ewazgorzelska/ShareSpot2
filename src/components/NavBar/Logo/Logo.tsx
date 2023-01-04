import { useMediaQuery } from '@mantine/hooks';
import './Logo.styles.scss';

const Logo = () => {
  const largeScreen = useMediaQuery('(min-width: 767px)');
  return (
    <a href='/'>
      <div className={`logo ${largeScreen ? `logo-desktop` : `logo-mobile`}`} />
    </a>
  );
};

export default Logo;
