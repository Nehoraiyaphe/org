import Navbar from "./componetes/Layout/Navbar/Navbar";
import Footer from "./componetes/Layout/footer/Footer";
import RouterDom from "./componetes/router/RouterDOM";


export function App() {
  return (
    <div>
      <Navbar/>
      <RouterDom/>
      <Footer/>

    </div>
  );
}

export default App;
