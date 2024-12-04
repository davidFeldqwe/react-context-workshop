import UsernameChanger from "./components/UsernameChanger";
import UsernameDisplay from "./components/UsernameDisplay";
import Buttons from "./components/Buttons";

import './App.css'
import { useState } from "react";

function App() {


  const [state, setState] = useState<string>("")
  return (
    <>
      <UsernameChanger />
      <UsernameDisplay />
      <Buttons />
    </>
  )
}

export default App
