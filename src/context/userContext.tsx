import { createContext } from 'react';

const UserContext = createContext<null>(null);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
};
