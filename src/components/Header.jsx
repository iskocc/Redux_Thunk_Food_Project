import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useSelector } from "react-redux";
import { IoRestaurant } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  const { restaurants, error } = useSelector((store) => store.restaurant);
  const { cart } = useSelector((store) => store.cart);
  const total = cart.reduce((a, b) => a + b.amount, 0);
  return (
    <header className="shadow-sm shadow-gray-600">
      <Container designs="flex justify-between items-center">
        <Link
          to="/"
          className="text-red-500 text-2xl font-mono font-[900] md:text-3xl flex gap-2 items-center"
        >
          {" "}
          <span className="max-sm:hidden">ThunkSepeti</span>
        </Link>
        <div className="flex gap-5 items-center">
          {error ? (
            <span>Restorant bulunamadı</span>
          ) : (
            <Link className="flex items-center text-nowrap gap-1 text-sm hover:underline cursor-pointer max-md:text-[12px] max-sm:text-[10px]">
              <FaMapMarkerAlt className="text-red-500 text-2xl max-md:text-lg max-sm:text-md" />{" "}
              göre
              <span className=" text-lg">{restaurants.length}</span>
              <IoRestaurant className="text-red-500 text-2xl max-md:text-lg max-sm:text-md" />{" "}
              <span className="max-md:hidden">Restorant</span> bulundu
            </Link>
          )}
          <Link
            to="/register"
            className=" py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white transition rounded-xl max-md:hidden"
          >
            Kayıt Ol
          </Link>
          <Link
            to="/register"
            className=" py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white transition rounded-xl max-md:hidden"
          >
            Giriş Yap
          </Link>
          <NavLink
            to="/cart"
            className="text-red-500 text-2xl p-2 rounded-full hover:bg-red-100 flex items-center"
          >
            <TiShoppingCart />
            <span className="text-base p-1 text-black">{total}</span>
          </NavLink>
        </div>
      </Container>
    </header>
  );
};

export default Header;
