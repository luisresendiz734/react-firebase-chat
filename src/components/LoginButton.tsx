import { useUser } from "../context/UserContext";

const LoginButton = () => {
  const { login } = useUser();
  return (
    <button className="bg-red-500 text-white p-2 rounded m-1" onClick={login}>
      Login with Google
    </button>
  );
};

export default LoginButton;
