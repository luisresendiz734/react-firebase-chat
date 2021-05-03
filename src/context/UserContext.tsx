import { createContext, FunctionComponent, useContext } from "react";
import { firebase, auth, googleProvider } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface IUserContext {
  user: firebase.User | null | undefined,
  login: () => void,
  logout: () => void,
  loading: boolean,
  error: any
}

const UserContext = createContext<IUserContext>({
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
  error: null
});

export const UserProvider: FunctionComponent = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const login = async () => {
    await auth.signInWithPopup(googleProvider);
  }
  const logout = async () => {
    await auth.signOut();
  }
  return (
    <UserContext.Provider value={{ user, loading, error, login, logout }}>
      { children }
    </UserContext.Provider>
  )
};

export const useUser = () => useContext(UserContext);
