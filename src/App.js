
import "./App.css";
import Navbar from "./Components/Navbar";
import Parent from "./Components/props/Parent";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">Welcome to React App</div>
      <Parent/>
    </>
  );
}

export default App;
