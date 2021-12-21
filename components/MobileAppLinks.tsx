import React from 'react';
import { HStack, Link } from '@chakra-ui/react';
import Image from './shared/Image';

interface MobileAppLinksProps {
  size?: 'md' | 'lg';
}

const MobileAppLinks: React.FC<MobileAppLinksProps> = ({ size = 'md' }) => {
  const w = size === 'md' ? '122px' : '180px';
  const h = size === 'md' ? '42px' : '54px';
  return (
    <HStack spacing='4'>
      <Link>
        <Image h={h} w={w} src='/images/play-store.png' alt='google play' />
      </Link>
      <Link>
        <Image h={h} w={w} src='/images/app-store.png' alt='app store' />
      </Link>
    </HStack>
  );
};
export default MobileAppLinks;
