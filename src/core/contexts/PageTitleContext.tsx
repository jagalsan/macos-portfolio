'use client';
import { createContext, useContext, useState, ReactNode } from "react";

interface TitleContextProps {
  title: string;
  setTitle: (title: string) => void;
}

const TitleContext = createContext<TitleContextProps | undefined>(undefined);

export const TitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Home");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider");
  }
  return context;
};
