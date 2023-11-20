import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/index.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
