import React, { Children } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({Children}) =>{
    const [user, Setuser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, Setuser}}>
            {Children}
        </UserContext.Provider>
    )

}
export default UserContextProvider;