import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant() 

  return (
    <ManageRestaurantForm 
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  );
}
 
export default ManageRestaurantPage;