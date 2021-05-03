import logo from "../logo.svg";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img className="animate-spin w-32 h-32" src={logo} alt="React Logo" />
    </div>
  );
};

export default Loading;
