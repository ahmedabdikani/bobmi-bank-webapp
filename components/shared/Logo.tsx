import React from 'react';
import { HStack, Image } from '@chakra-ui/react';

import { Body2 } from './typography';

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <HStack>
      <Image src='/images/logo.png' alt='logo' h='26px' objectFit='contain' />
      <Body2 color='brand.2' fontWeight='bold'>
        Bombi Bank
      </Body2>
    </HStack>
  );
};
export default Logo;
