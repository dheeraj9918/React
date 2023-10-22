// import { useEffect ,useState} from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./ShimmerUI";


// const RestaurantMenu = () => {
//     const { id } = useParams();
//     const [restaurant, setRestaurant] = useState("restaurant");


//     useEffect(() => {
//         getRestaurnat();
//     }, []);

//     async function getRestaurnat() {
//         const data = await fetch("https://www.swiggy.com/restaurants/mcdonalds-kamla-nagar-delhi-253729");

//         const json = await data.json();
//         setRestaurant(json.data);
//     }

//     return !restaurant ? (<Shimmer/>) : (
//         <div>
//             <h1>this is the Namaste dabha :{id}</h1>
//             <h2>Name : {restaurant?.info?.name}</h2>
//         </div>
//     );
// };

// export default RestaurantMenu;