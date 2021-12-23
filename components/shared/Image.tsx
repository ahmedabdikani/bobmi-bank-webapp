import React from 'react';
import NextImage, { ImageProps } from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

const Image: React.FC<ImageProps & BoxProps> = (props) => {
  const {
    src,
    alt,
    width,
    height,
    layout,
    objectFit = 'contain',
    ...rest
  } = props;
  const newSrc = process?.env?.NEXT_PUBLIC_BASE_PATH
    ? `${process?.env?.NEXT_PUBLIC_BASE_PATH}${src}`
    : src;
  return (
    <Box {...rest}>
      <NextImage
        objectFit={objectFit}
        src={newSrc}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
      />
    </Box>
  );
};

export default Image;
