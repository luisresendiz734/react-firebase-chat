import { FunctionComponent } from "react";
import { useUser } from "../context/UserContext";
import LogoutButton from "./LogoutButton";

const Layout: FunctionComponent = ({ children }) => {
  const { user } = useUser();
  return (
    <>
      <header className="h-12 flex items-center justify-between fixed w-full px-4 bg-gray-800 text-white">
        <h1>React Firebase Chat</h1>
        {user && <LogoutButton />}
      </header>
      <main className="bg-gray-900 w-screen h-screen pt-12">{children}</main>
    </>
  );
};

export default Layout;
