import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const RestaurentCard = ({ name, cuisines, avgRating, cloudinaryImageId, areaName, costForTwo, locality }) => {
    const {user}= useContext(UserContext);
    return (
        <div className="flex mx-1 py-2 justify-between">
            <div className="w-[350px] h-[500px] p-2 bg-pink-100 shadow-lg">
                <img className="w-[100%] h-[250px]" src={IMG_CDN_URL +
                    cloudinaryImageId} />
                <h2 className="text-lg font-bold ">{name}</h2>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{areaName}</h4>
                <h3>{avgRating} Stars</h3>
                <h4>{costForTwo}</h4>
                <h4>{locality}</h4>
                <span className="text-lg font-bold">{user.name}-{user.email}</span>
                {/* .join(", ") in deserts and ice cream and healthe foood Agrapra no space when .join(",")not use we use join() for give comma between them*/}
            </div>
        </div>
    );
};

export default RestaurentCard;

//    ( 1)
// const RestrentCard = (props) => {
//     console.log(props);
//     return (

//         <div className="card">
//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//             props.restaurent.info.cloudinaryImageId }></img>
//             <h2>{props.restaurent.info.name}</h2>
//             <h3>{props.restaurent.info.avgRating} Stars</h3>
//             <h4>{props.restaurent.info.cuisines.join(", ")}</h4>
//             {/* .join(", ") in deserts and ice cream and healthe foood Agrapra no space when .join(",")not use we use join() for give comma between them*/}
//         </div>
//     );
// };





