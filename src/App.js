import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <LandingPage/>
    </div>
  );
}

export default App;
