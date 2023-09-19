
import { restaurentlist } from "../constants";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";


//what is state?
//what is hooks?
//what is use state?
function filterinfo  (searchInput,restaurants){
   const filterinfo = restaurants.filter((restaurant)=>
    restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterinfo;
}

const Body = () => {
    //   const searchTxt  = "Rollking"
    const [restaurants, setRestaurants] = useState(restaurentlist);
    // searchTxt is a local state variable;
    const [searchInput, setSearchInput] = useState(""); // to create a state variable;
    // this useState hooks returns a array; and first element of the array is the initial value;
    // {searchInput} is the variable name; and setSearchInput is a function to update the search input;
    


    return (
        <>
            <div className="search-containor">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }} />
                <button
                    className="search-btn"
                    onClick ={()=>{
                       
                       const info = filterinfo(searchInput,restaurants);
                       setRestaurants(info);
                    }}
                >Search</button>
            </div>
            <div className="restront-list">
                {
                    restaurants.map(restaurent => {
                        return (
                            <RestaurentCard {...restaurent.info} />
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



