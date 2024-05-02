import Login from "./public/pages/login/Login"
import Signup from "./public/pages/signup/Signup"
import Home from "./public/pages/home/Home"

function App() {
  return (
    <>
      <div>
        {!localStorage.getItem("user") ? <Home /> : <Signup/> }
        
      </div>
    </>
  )
}

export default App
