import { useState } from "react";

export const useToggle = (initial: boolean) => {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue(prev => !prev);

  return [value, toggle] as const;
};
