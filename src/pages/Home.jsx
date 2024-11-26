import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getRestaurants } from "../redux/actions/restAction";
import RestaurantCard from "./../components/RestaurantCard";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurant
  );
  console.log(error);
  const retry = () => dispatch(getRestaurants());

  return (
    <Container>
      <h1 className="font-semibold text-lg">Yakınınızdaki Restoranlar</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error msg={error} retry={retry} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
          {restaurants.map((i) => (
            <RestaurantCard key={i.id} data={i} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Home;
