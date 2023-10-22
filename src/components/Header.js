import { useState } from "react";
import Logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
// import store from "../utils/store";
import { useSelector } from "react-redux";
import { addItems } from "../utils/cardSlice";
import { useDispatch } from "react-redux";
// const isLoggedIn = () => {

//     return (true);
// }
export const Title = () => (
    <a href="/">
        <img
            className="h-16 p-2 "
            alt="logo"
            src={Logo}
        />
    </a>
);


//header comonents 

const HeaderComponant = () => {
    const [isLogin, setIsLogin] = useState(true);
    const isOnline = useOnline();
    const cartItem = useSelector(store=>store.cart.items);

   const  dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItems("Grapes"))
    }

    return (
        <div className='flex justify-between bg-black text-white'>
            <Title />
            <div >
                <ul className='flex'>
                    <Link to="/">
                        <li className='py-5 px-2'>Home</li>
                    </Link>
                    <Link to="/about">
                        <li className='py-5 px-2'>About</li>
                    </Link>
                    <Link to="/contact">
                        <li className='py-5 px-2'>Contact Us</li>
                    </Link>
                    <Link to="/instamart">
                        <li className='py-5 px-2'>Instamart</li>
                    </Link>
                    <li className='py-5 px-2'>Cart {cartItem.length}</li>
                    <button onClick={()=>handleAddItem()} className="bg-red-600 h-8 mt-4 border border-red-950 rounded-md">Add to cart</button>
                 
                </ul>
            </div>
            <h1>{isOnline? "True": "False"}</h1>
            {isLogin ? (<button className="pr-5" onClick={() => setIsLogin(false)}>Log In</button>) :
                (<button className="pr-5"  onClick={() => setIsLogin(true)}>Log Out</button>)
            }
        </div>
    );
};

export default HeaderComponant;