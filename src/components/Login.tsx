import LoginButton from "./LoginButton";

const Login = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-4xl text-white mb-4">Chat</h2>
      <p className="text-white mb-2">
        Inicia sesion con tu cuenta de Google para continuar
      </p>
      <LoginButton />
    </section>
  );
};

export default Login;
