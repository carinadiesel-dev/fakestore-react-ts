import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navigation/index.tsx";
import HomePage from "./pages/Home.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
