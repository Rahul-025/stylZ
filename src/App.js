import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar/Navbar.component";

// Pages
import Authentication from "./pages/authentication/Authentication.page";
import Checkout from "./pages/checkout/Checkout.page";
import Home from "./pages/home/home.page";
import Shop from "./pages/shop/shop.page";

// reducers
import { setCurrentUser } from "./store/user/user.slice";

// Utils
import { onAuthStateChangedListner } from "./utilities/firebase/firebase.util";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((currentUser) => {
      dispatch(setCurrentUser(currentUser));
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
