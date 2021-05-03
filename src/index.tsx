import ReactDOM from "react-dom";
import App from "./App";
import Layout from "./components/Layout";
import { UserProvider } from "./context/UserContext";
import "./index.css";

ReactDOM.render(
  <UserProvider>
    <Layout>
      <App />
    </Layout>
  </UserProvider>,
  document.getElementById("root")
);
