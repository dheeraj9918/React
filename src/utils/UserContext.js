import { createContext } from "react";

const UserContext =createContext({
    user:{
        name: 'John',
        email: 'john@example.com',
    }
});

export default UserContext;