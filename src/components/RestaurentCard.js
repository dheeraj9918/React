import {IMG_CDN_URL,} from "../constants";


 const RestaurentCard = ({ name, cuisines, avgRating, cloudinaryImageId, areaName, costForTwo ,locality }) => {
    return (

        <div className="card">
            <img src={IMG_CDN_URL +
                cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{avgRating} Stars</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <h4>{locality}</h4>
            {/* .join(", ") in deserts and ice cream and healthe foood Agrapra no space when .join(",")not use we use join() for give comma between them*/}
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
//             props.restaurants.info.cloudinaryImageId }></img>
//             <h2>{props.restaurants.info.name}</h2>
//             <h3>{props.restaurants.info.avgRating} Stars</h3>
//             <h4>{props.restaurants.info.cuisines.join(", ")}</h4>
//             {/* .join(", ") in deserts and ice cream and healthe foood Agrapra no space when .join(",")not use we use join() for give comma between them*/}
//         </div>
//     );
// };





//    ( 2)

// const RestrentCard = ({name, cuisines,avgRating,cloudinaryImageId ,areaName,costForTwo}) => {
//     return (

//         <div className="card">
//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
//             cloudinaryImageId }></img>
//             <h2>{name}</h2>
//             <h3>{avgRating} Stars</h3>
//             <h4>{cuisines.join(", ")}</h4>
//             <h4>{areaName}</h4>
//             <h4>{costForTwo}</h4>
//             {/* .join(", ") in deserts and ice cream and healthe foood Agrapra no space when .join(",")not use we use join() for give comma between them*/}
//         </div>
//     );
// };