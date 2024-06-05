import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import NotFound from "./routes/NotFound/NotFound";
import Home from "./routes/Home/Home";
import SignIn from "./routes/SignIn/SignIn";
import User from "./routes/User/User";
import Footer from "./components/common/Footer/Footer";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import EditUser from "./routes/User/EditUser";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/user" element={<User />} />
          <Route path="/user/edit" element={<EditUser />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
