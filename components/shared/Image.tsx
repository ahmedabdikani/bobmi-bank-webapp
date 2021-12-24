import React from 'react';
import { Img as ChakraImage, ImageProps } from '@chakra-ui/react';

const Image: React.FC<ImageProps> = (props) => {
  const {
    src,
    width,
    height,
    objectFit = 'contain',
    loading = 'lazy',
    ...rest
  } = props;
  const newSrc = process?.env?.NEXT_PUBLIC_BASE_PATH
    ? `${process?.env?.NEXT_PUBLIC_BASE_PATH}${src}`
    : src;
  return (
    <ChakraImage
      src={newSrc}
      // boxSize={width + 'px'}
      w={width + 'px'}
      maxH={height + 'px'}
      objectFit={objectFit}
      loading={loading}
      {...rest}
    />
  );
};

export default Image;
