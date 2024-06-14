import { createContext, useContext, useEffect, useState } from 'react';
export type userObject = {
  username: string;
  email: string;
  id?: number;
};

type userState = {
  user: userObject;
};

type userContextValue = {
  setLocalStorageUser: (user: userObject) => void;
  getLocalStorageUser: () => userObject;
};

const UserContext = createContext<userContextValue | null>(null);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const ctx: userContextValue = {
    setLocalStorageUser(user: userObject) {
      const userType = localStorage.setItem('user', JSON.stringify(user));
    },
    getLocalStorageUser() {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },
  };

  return <UserContext.Provider value={ctx}>{children}</UserContext.Provider>;
};

export function useUserContext() {
  const userCtx = useContext(UserContext);
  if (userCtx === null) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return userCtx;
}
