import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(undefined);
export function UserProvider({ children }) {
  const user = GetCurrentUser();
  return <UserContext.Provider value={user}> {children} </UserContext.Provider>;
}
export function GetCurrentUser() {
  const [user, setUser] = useState();
  useEffect(() => {
    const token = localStorage.getItem("ErdemToken");
    axios
      .get(`${process.env.REACT_APP_API_URL}/getUser`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((e) => setUser(null));
  }, []);
}
