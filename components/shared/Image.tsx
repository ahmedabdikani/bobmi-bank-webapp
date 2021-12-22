import React from 'react';
import { ImageProps, Image as DefaultImage } from '@chakra-ui/react';

const Image: React.FC<ImageProps> = (props) => {
  const { src, ...rest } = props;

  const newSrc = process?.env?.NEXT_PUBLIC_BASE_PATH
    ? `${process?.env?.NEXT_PUBLIC_BASE_PATH}${src}`
    : src;

  console.log(newSrc);

  return <DefaultImage src={newSrc} {...rest} />;
};

export default Image;
