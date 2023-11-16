import { useEffect } from "react";
import axios from "axios";
import { Outlet, Link, useNavigate } from "react-router-dom";



const Layout = () => {

useEffect(()=>{
axios.get('/sessionCheck').then((res)=>{
    console.log(res.data)
})
},[])


  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to='/Register'>Register</Link>
            </li>
            <li>
                <Link to='/Login'>Login</Link>
            </li>
      
        </ul>
          
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;