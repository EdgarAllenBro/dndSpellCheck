import { useEffect } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const Layout = () => {
  const user = useSelector((state)=> state.userName)

    const dispatch = useDispatch()

useEffect(()=>{
axios.get('/sessionCheck').then((res)=>{
    if(res.data.userId){
        dispatch({type:'login', payload:{userName:res.data.userName, userId:res.data.userId}})
    }
})
},[])


  return (
    <>
    <header className="header">
      <nav className="navBar">
        <ul>
            {user !== '' ? <li>
                <Link to='/home'>Home</Link>
            </li> : '' }
            <li>
              <Link to='/spellBook'>Spell Book</Link>
            </li>
            <li>
                <Link to='/Register'>Register</Link>
            </li>
            <li>
                <Link to='/Login'>Login</Link>
            </li>
      
        </ul>
          
      </nav>
      </header>
      <body>
      <Outlet />
      </body>
    </>
  )
};

export default Layout;