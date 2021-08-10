import React, { createContext } from 'react';

export const IBContext = createContext();

function IBContextProvider(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const info = {
    blahblah: 'blahblah',
  };

  return <IBContext.Provider value={info}>{children}</IBContext.Provider>;
}

export default IBContextProvider;
