import { useState } from "react";
export const useMode = (initialMode: boolean = false) => {
  const [isMode, setIsMode] = useState<boolean>(initialMode);

  const activateMode = () => {
    setIsMode(true);
  };

  const deactivateMode = () => {
    setIsMode(false);
  };

  return {
    isMode,
    activateMode,
    deactivateMode,
  };
};
