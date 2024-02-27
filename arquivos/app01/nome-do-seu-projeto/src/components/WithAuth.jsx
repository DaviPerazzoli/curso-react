import React,{useEffect, useState} from "react";

export default function withAuth(WrappedComponent){
    function WithAuth(props){
        const [isAuthenticated, setIsAuthenticated]=useState(true);

        const verifyAuth=()=>{
            if(!isAuthenticated){
                return <p>Plese Log in</p>;
            }else{
                return <WrappedComponent {...props}/>;
            }
        }

        return(
            <>
                {verifyAuth()}
            </>            
        )
    }

    return WithAuth;
}