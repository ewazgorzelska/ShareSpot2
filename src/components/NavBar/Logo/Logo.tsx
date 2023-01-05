import { Anchor, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Logo = () => {
  const mediumScreen = useMediaQuery('(min-width: 767px)');
  return (
    <Anchor
      href='/'
      h={mediumScreen ? '200px' : '150px'}
      w={mediumScreen ? '200px' : '150px'}
    >
      <Image
        src={
          mediumScreen ? 'assets/logo-primary.png' : 'assets/logo-mobile.png'
        }
      />
    </Anchor>
  );
};

export default Logo;
