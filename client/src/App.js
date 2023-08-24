import { Route, Routes } from "react-router-dom";
import { Login, Signup, Restricted } from "./pages";
import Home from "./pages/Home"
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/restricted" element={<Restricted />} />
      </Routes>
    </div>
  );
}

export default App;
