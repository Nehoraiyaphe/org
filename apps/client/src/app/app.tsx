import { Routes, Route } from "react-router-dom";
import Login from "./componetes/Login/Login";
import SignIn from "./componetes/SignIn/SignIn";
import Home from "./componetes/map/Map"
import A from "./componetes/map/Test";
import Favorite from "./componetes/Favourites/Favorite";
import { useQuery, gql } from '@apollo/client';


export function App() {
  const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Map" element={<Home/>} />
        <Route path="/Test" element={<A/>} />
        <Route path="/Favorite" element={<Favorite/>} />
      </Routes>
    </div>
  );
}

export default App;
