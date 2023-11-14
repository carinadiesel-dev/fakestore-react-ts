import { Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navigation/index.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>{/* Add routes */}</Routes>
    </>
  );
}

export default App;
