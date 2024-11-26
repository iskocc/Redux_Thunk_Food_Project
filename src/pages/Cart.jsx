import { useSelector } from "react-redux";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import CartItem from "./../components/CartItem";
import OrderBox from "../components/OrderBox";

const Cart = () => {
  const { isLoading, error, cart } = useSelector((store) => store.cart);

  return (
    <Container designs="mt-10 text-xl p-5 ">
      <h1 className="text-2xl font-bold mb-5 ">Sepet</h1>
      <div className="grid md:grid-cols-[1fr_300px] gap-10">
        {cart.length >= 1 && <OrderBox cart={cart} />}
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : cart.length === 0 ? (
            <div className="flex flex-col items-center">
              <p>Sepette herhangi bir ürün yok</p>
              <Link
                to="/"
                className="border p-2 shadow rounded my-8 hover:bg-red-100"
              >
                Ürün Ekle
              </Link>
            </div>
          ) : (
            cart.map((i) => <CartItem key={i.id} item={i} />)
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
