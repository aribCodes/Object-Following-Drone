import Login from "./public/pages/login/Login";
import Signup from "./public/pages/signup/Signup";
import Home from "./public/pages/home/Home";

function App() {
  return <>{!localStorage.getItem("user") ? <Home /> : <Signup />}</>;
}

export default App;
