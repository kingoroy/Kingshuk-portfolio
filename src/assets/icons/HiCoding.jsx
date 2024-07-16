import React from 'react';
import hello from './hello.json';
const hiCoding = () => {
  const parsed = JSON.parse(hello);
  return (
    <div
    dangerouslySetInnerHTML={{ __html: parsed }}
  />
  );
};

export default hiCoding;
