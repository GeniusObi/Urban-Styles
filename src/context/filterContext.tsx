import  { createContext } from 'react';

const FilterContext = createContext<null>(null);
const FilterProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <FilterContext.Provider value={null}>{children}</FilterContext.Provider>
  );
};
