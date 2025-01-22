
import Home from "./pages/Home"
import {Routes , Route} from "react-router-dom"
import Login from "./pages/Login"
function App() {
  return (
    <div className="bg-gradient-to-tr from-slate-950 via-lime-950 to-teal-950 dark:bg-gradient-to-tl dark:from-gray-950 dark:via-slate-950 dark:to-black h-screen" >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default App
