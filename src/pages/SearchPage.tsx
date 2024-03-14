import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } =  useParams();
  const { results } = useSearchRestaurants(city)

  return (
    <span>
      User searched for {city}<br />
      <span>{results?.data.map((restaurant) => (
        <span>
          Found - {restaurant.restaurantName}, {restaurant.city}
        </span>
      ))}</span>
    </span>
  );
}
 
export default SearchPage;