import { useSelector } from "react-redux"

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