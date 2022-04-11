import { useState } from "react";
export const useToggle = (initalValue: boolean = false) => {
  const [toggleStatus, setToggleStatus] = useState(initalValue);

  const handleToggle = () => {
    setToggleStatus((prevToggle) => !prevToggle);
  };
  return {
    toggleStatus,
    handleToggle,
  };
};
