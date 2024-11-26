import { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { getRestaurants } from "./redux/actions/restAction";
import Restaurant from "./pages/Restaurant";
import Register from "./pages/Register";
import { getCart } from "./redux/actions/cartAction";

const App = () => {
  const dispatch = useDispatch();
  /* klasik yöntem*/
  {
    /* 
    useEffect(() => {
    dispatch(setLoading());
    api
      .get("/restaurants")
      .then((res) => dispatch(setRestaurant(res.data)))
      .catch((err) => dispatch(setError(err)));
  }, []); 
 */
  }

  /* thunk */
  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getCart());
  }, []);
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
