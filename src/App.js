import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/Navbar.component";

// Pages
import Authentication from "./pages/authentication/Authentication.page";
import Home from "./pages/home/home.page";
import Shop from "./pages/shop/shop.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
