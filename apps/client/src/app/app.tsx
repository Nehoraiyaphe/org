// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.css';
import { Routes, Route } from "react-router-dom";
import Login from "./componetes/Login/Login";
import SignIn from "./componetes/SignIn/SignIn";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
