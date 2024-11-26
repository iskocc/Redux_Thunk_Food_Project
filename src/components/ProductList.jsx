import { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import { FaFireFlameCurved } from "react-icons/fa6";
import Error from "./Error";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div>
      {!error && (
        <div className="mb-5 mt-3">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <FaFireFlameCurved className="text-red-500" />
            Popüler
          </h2>
          <p className="text-gray-500 mt-3">
            Restoranın en çok tercih edilen ürünleri
          </p>
        </div>
      )}
      {error ? (
        <Error msg={error} />
      ) : !products ? (
        <Loader />
      ) : (
        <div className="grid lg:grid-cols-2 gap-5">
          {products.map((i) => (
            <ProductCard key={i.id} item={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
