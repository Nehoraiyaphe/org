import { Routes, Route } from "react-router-dom";
import Login from "./componetes/Login/Login";
import SignIn from "./componetes/SignIn/SignIn";
import Home from "./componetes/map/Map"
import YourComponent from "./componetes/map/Test";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Map" element={<Home/>} />
        <Route path="/Test" element={<YourComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
