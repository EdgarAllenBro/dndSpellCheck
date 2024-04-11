import { useSelector } from "react-redux"
import { useState } from "react";


const Home = ()=>{

const userName = useSelector((state)=>state.userName)
const userId = useSelector((state)=>state.userId)

    return(
        <>
            <h1>Welcome {userName}</h1>
        </>
    )
}


export default Home