
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profle from "./components/Profle";

function App() {
  return (
    <UserContextProvider>
      <h1>context api app</h1>
      <Login/>
      <Profle/>
    </UserContextProvider>
  );
}

export default App;
