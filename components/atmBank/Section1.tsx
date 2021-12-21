import { Image } from '@chakra-ui/react';
import React from 'react';
import Section from '../shared/Section';

interface Section1Props {}

const Section1: React.FC<Section1Props> = ({}) => {
  return (
    <Section alignItems='center' my='12'>
      <Image src='/images/atm-details.png' alt='atm details' />
    </Section>
  );
};
export default Section1;
