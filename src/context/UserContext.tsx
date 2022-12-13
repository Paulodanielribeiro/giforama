

import { createContext, ReactNode, useState } from "react";

type UserContextType = {
  filter: string;
  setFilter: (newState: string) => void;
};

const initialValue: UserContextType = {
  filter: "",
  setFilter: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [filter, setFilter] = useState(initialValue.filter);

  return (
    <UserContext.Provider value={{ filter, setFilter }}>
      {children}
    </UserContext.Provider>
  );
};
