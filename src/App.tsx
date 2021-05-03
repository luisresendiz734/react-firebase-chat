import Channel from "./components/Channel";
import Loading from "./components/Loading";
import Login from "./components/Login";
import { useUser } from "./context/UserContext";

const App = () => {
  const { user, loading, error } = useUser();

  if(loading) {
    return <Loading />
  }

  if(error) {
    return (
      <h2>Firebase internal error: {error}</h2>
    )
  }

  if(user) {
    return <Channel />
  }


  return <Login />
}

export default App;