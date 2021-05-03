import { useUser } from "../context/UserContext";

const LogoutButton = () => {
  const { logout } = useUser();

  return (
    <button className="bg-red-500 px-2 py-1 rounded" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
