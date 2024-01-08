import { Routes, Route } from "react-router-dom";
import Login from "./componetes/Login/Login";
import SignIn from "./componetes/SignIn/SignIn";
import Home from "./componetes/map/Map"

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Map" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
