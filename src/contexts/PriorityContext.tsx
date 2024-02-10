'use client';

import React, { createContext, useContext, useState } from 'react';

// datatype of priority context props declared here
type PriorityContextProps = {
  priority: Priority | '';
  setPriority: React.Dispatch<React.SetStateAction<Priority | ''>>;
};

// creating the context here
const PriorityContext = createContext<PriorityContextProps | null>(null);

// initiating the context provider here
const PriorityContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // integration of react hooks here
  const [priority, setPriority] = useState<Priority | ''>('');

  // rendering priority context provider component here
  return (
    <PriorityContext.Provider value={{ priority, setPriority }}>
      {children}
    </PriorityContext.Provider>
  );
};

export default PriorityContextProvider;

// creating custom hook to call the context here
export const usePriorityContext = () => {
  const context = useContext(PriorityContext);

  if (!context) {
    throw new Error(
      'usePriorityContext must be used within a PriorityContextProvider'
    );
  }

  return context;
};
