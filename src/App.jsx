import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import NotFound from "./routes/NotFound/NotFound";
import Home from "./routes/Home/Home";
import SignIn from "./routes/SignIn/SignIn";
import User from "./routes/User/User";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
