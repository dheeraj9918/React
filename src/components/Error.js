import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const error =useRouteError();
    return (
        <div>
            <h1>OPPs!!</h1>
            <br/>
            <h2>Something is wrong....</h2>
            <br/>
            <h2>{error.status +" :  " +error.statusText}</h2>
        </div>
    )
};

export default Error;