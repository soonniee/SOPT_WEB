import React from "react";
import UserCard from "./UserCard";
const Result = ({userState})=>{
    const {status,data:userData} = userState;
    switch(status){
        case "pending":
            return <div style={{color:"white", fontSize : "20px"}}>Loading ...</div>
        case "resolved":
            return <UserCard userData={userData}/>;
        case "rejected":
            return(
                <div style={{color:"white", fontSize : "20px"}}>User Not Found</div>
            );
        case "idle":
        default:
            return <div></div>
    }
    
};

export default Result;