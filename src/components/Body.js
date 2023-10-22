
import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "../components/ShimmerUI";
import { Link } from "react-router-dom";
import { filterinfo } from "../utils/Helper";
import useOnline from "../utils/useOnline";


//what is state?
//what is hooks?
//what is use state?


const Body = (props) => {
    const [allRestaurants, setallRestaurants] = useState([])
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    // searchTxt is a local state variable;
    const [searchInput, setSearchInput] = useState(""); // to create a state variable;
    // this useState hooks returns a array; and first element of the array is the initial value;
    // {searchInput} is the variable name; and setSearchInput is a function to update the search input;


    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6848763&lng=77.21608499999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setallRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const online = useOnline();
    if(!online){
        return <h1>Please ,Check your Internet connection</h1>;
    }
        
    //not renderd component early return;
    if (!allRestaurants) return null;
    return (allRestaurants?.length == 0) ? (
        <Shimmer />) : (
        <>
            <div className="search-containor p-5 bg-pink-200">
                <input
                    type="text"
                    placeholder="Search"
                    className="p-2 rounded-l-md"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }} />
                <button
                    className="p-2 rounded-r-md bg-sky-500"
                    onClick={() => {

                        const info = filterinfo(searchInput, allRestaurants);
                        setfilteredRestaurants(info);
                    }}
                >Search</button>
            </div>
            <div className="flex justify-between flex-wrap py-2 px-2 ">
                {

                    filteredRestaurants.map(restaurent => {
                         
                        return (

                          <Link to ={"/restaurent/" +restaurent.info.id } key={restaurent.info.id}>  <RestaurentCard {...restaurent.info}  /></Link>

                        )
                    
                    })
                }
            </div>
        </>
    )
};
export default Body;











//(1)
// const Body = () => {
//     return (
//         <div className="restront-list">
//             <RestrentCard restaurants = {restaurentlist[0]} />
//             <RestrentCard restaurants = {restaurentlist[1]}/>
//             <RestrentCard restaurants = {restaurentlist[2]}/>
//             <RestrentCard restaurants = {restaurentlist[3]}/>
//             <RestrentCard restaurants = {restaurentlist[4]}/>
//             <RestrentCard restaurants = {restaurentlist[5]}/>
//             <RestrentCard restaurants = {restaurentlist[6]}/>
//             <RestrentCard restaurants = {restaurentlist[7]}/>
//             <RestrentCard restaurants = {restaurentlist[8]}/>
//             <RestrentCard restaurants = {restaurentlist[6]}/>
//             <RestrentCard restaurants = {restaurentlist[7]}/>
//             <RestrentCard restaurants = {restaurentlist[8]}/>
//         </div>
//     )
// }




//  (2)

// const Body = () => {
//     return (
//         <div className="restront-list">
//             <RestrentCard name = {restaurentlist[0].info.name} cuisines= {restaurentlist[0].info.cuisines} avgRating= {restaurentlist[0].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[1].info.name} cuisines= {restaurentlist[1].info.cuisines} avgRating= {restaurentlist[1].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[2].info.name} cuisines= {restaurentlist[2].info.cuisines} avgRating= {restaurentlist[2].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[3].info.name} cuisines= {restaurentlist[3].info.cuisines} avgRating= {restaurentlist[3].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[4].info.name} cuisines= {restaurentlist[4].info.cuisines} avgRating= {restaurentlist[4].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[5].info.name} cuisines= {restaurentlist[5].info.cuisines} avgRating= {restaurentlist[5].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[6].info.name} cuisines= {restaurentlist[6].info.cuisines} avgRating= {restaurentlist[6].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[7].info.name} cuisines= {restaurentlist[7].info.cuisines} avgRating= {restaurentlist[7].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[8].info.name} cuisines= {restaurentlist[8].info.cuisines} avgRating= {restaurentlist[8].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[6].info.name} cuisines= {restaurentlist[6].info.cuisines} avgRating= {restaurentlist[6].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[7].info.name} cuisines= {restaurentlist[7].info.cuisines} avgRating= {restaurentlist[7].info.avgRating}/>
//             <RestrentCard name = {restaurentlist[8].info.name} cuisines= {restaurentlist[8].info.cuisines} avgRating= {restaurentlist[8].info.avgRating}/>
//         </div>
//         );
// };



//   (3)
// const Body = () => {
//     return (
//         <div className="restront-list">
//             <RestrentCard {...restaurentlist[0].info} />
//             <RestrentCard {...restaurentlist[1].info} />
//             <RestrentCard {...restaurentlist[2].info} />
//             <RestrentCard {...restaurentlist[3].info} />
//             <RestrentCard {...restaurentlist[4].info} />
//             <RestrentCard {...restaurentlist[5].info} />
//             <RestrentCard {...restaurentlist[6].info} />
//             <RestrentCard {...restaurentlist[7].info} />
//             <RestrentCard {...restaurentlist[8].info} />
//             <RestrentCard {...restaurentlist[6].info} />
//             <RestrentCard {...restaurentlist[7].info} />
//             <RestrentCard {...restaurentlist[8].info} />
//         </div>
//     )
// }



