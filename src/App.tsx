import { Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navigation/index.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
    <Route path="/books" element={<BookList />} /> */}
      </Routes>
    </>
  );
}

export default App;
