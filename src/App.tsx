import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/index.tsx";
import HomePage from "./pages/Home.tsx";
import ProductsPage from "./pages/Products.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
