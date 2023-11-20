import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/index.tsx";
import HomePage from "./pages/Home.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
