const { createContext, useState } = require("react");

const navbarSpecial = createContext(undefined);

export function Special({ children }) {
  const [audioNavbar, setAudioNavbar] = useState(false);
  return (
    <>
      <navbarSpecial.Provider value={{}}>{children}</navbarSpecial.Provider>
    </>
  );
}
