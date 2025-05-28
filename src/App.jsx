import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./components";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" index element={<Dashboard />} />

            {/* <Route path="/" element={}/> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
