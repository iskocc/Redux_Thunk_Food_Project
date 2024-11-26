import Container from "../components/Container";
import RestaurantDetail from "../components/RestaurantDetail";
import ProductList from "../components/ProductList";

const Restaurant = () => {
  return (
    <div className="min-h-[61vh]">
      <div className="shadow-md">
        <Container>
          <RestaurantDetail />
        </Container>
      </div>
      <Container>
        <ProductList />
      </Container>
    </div>
  );
};

export default Restaurant;
