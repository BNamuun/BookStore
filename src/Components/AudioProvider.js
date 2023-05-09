import { createContext, useState } from "react";

export const AudioContext = createContext(undefined);
export function AudioProvider({ children }) {
  const [current, setCurrent] = useState("");
  console.log("current", current);
  return (
    <AudioContext.Provider value={{ current, setCurrent }}>
      {children}
    </AudioContext.Provider>
  );
}
