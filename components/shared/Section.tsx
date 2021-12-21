import { Box, BoxProps, VStack } from '@chakra-ui/react';
import React from 'react';

const Section: React.FC<BoxProps> = (props) => {
  return (
    <VStack
      align='stretch'
      justify='center'
      as='section'
      minH={['max-content', 'max-content', 'max-content', '80vh']}
      {...props}
    />
  );
};

export default Section;
