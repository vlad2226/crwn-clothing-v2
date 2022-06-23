import Home from "./routes/home/home-component";
import Navbar from "./routes/navigation/Navbar.component";
import SignIn from "./sign-in/sign-in.component";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
