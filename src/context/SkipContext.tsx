import { createContext, useContext, useState, ReactNode } from "react";
import { Skip } from "../types/types";

interface SkipContextType {
  selectedSkip: Skip | null;
  setSelectedSkip: (skip: Skip | null) => void;
}

const SkipContext = createContext<SkipContextType | undefined>(undefined);

export const SkipProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <SkipContext.Provider value={{ selectedSkip, setSelectedSkip }}>
      {children}
    </SkipContext.Provider>
  );
};

export const useSkipContext = (): SkipContextType => {
  const context = useContext(SkipContext);
  if (!context) {
    throw new Error("useSkipContext must be used within a SkipProvider");
  }
  return context;
};
