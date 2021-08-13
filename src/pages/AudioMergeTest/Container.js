/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';

import Presenter from './Presenter';

export default function AudioMergeTest() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      console.log(`function called`);
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  return <Presenter onDrop={onDrop} />;
}
