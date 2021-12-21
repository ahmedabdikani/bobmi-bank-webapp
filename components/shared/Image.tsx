import { ImageProps } from '@chakra-ui/react';
import React from 'react';

const Image: React.FC<ImageProps> = (props) => {
  const { src, alt, ...rest } = props;

  return (
    <Image
      src={`${process?.env?.NEXT_PUBLIC_BASE_PATH}${src}`}
      alt={alt}
      {...rest}
    />
  );
};
export default Image;
