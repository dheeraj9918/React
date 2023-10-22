/**
 * Parcle work 
 * 
 * 
 * HMR Hot module Replacement
 * 
 * File Watcher algorithm 
 * {prarcel is doing for us like render automatically on the server side and file watcher watch the file} 
 *  Minified our code
 * bundling and cleaning our code;
 * it manage development and production environment
 * super fast build algorithm
 * image optimization
 * cashing while development
 * compression 
 * compatable with older version of the browser
 * HTTPS on devlopement
 * consisting hashing algroithm
 * zero configuration
 */






import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
//by default import components
import HeaderComponant from './components/Header';
import Body from './components/Body';
//default and name import write in another  way like as next linen I writter in curlybrace we can import multiple file like {Title , another file name what we can import }
// import HeaderComponant, {Title} from './components/Header';
//by the name import componets
// import { Title } from './components/Header';
import Footer from './components/Footer';
import About from './components/About Us';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenuecard from './components/RestaurentMenu';
import Profile from './components/ProfileClass';
import Shimmer from './components/ShimmerUI';
import { Provider } from 'react-redux';
import store from './utils/store';
// import Instamart from './components/Instamart';

//dynamic bundiling
// cnunking
//dynamic import
//lazy loading
//on demond loading 
//code spliting


const Instamart = lazy(() => import('./components/Instamart'));


// React.createElement =object = HTML(DOM)

const AppLayout = () => {
    return (
        <>
            <Provider store = {store}>
                <HeaderComponant />
                <Outlet />
                <Footer />
            </Provider>
        </>
    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurent/:id",
                element: <RestaurantMenuecard />,
            },
            {
                path: "/instamart",
                element:
                    <Suspense fallback={Shimmer}>
                        <Instamart />
                    </Suspense>,
            }
        ]
    }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
