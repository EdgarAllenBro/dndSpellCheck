import { useEffect } from "react";
import axios from "axios";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const Layout = () => {
  const user = useSelector((state)=> state.userName)

  const dispatch = useDispatch()
  const redirect = useNavigate()

  useEffect(()=>{
    axios.get('/sessionCheck').then((res)=>{
      if(res.data.userId){
          dispatch({type:'login', payload:{userName:res.data.userName, userId:res.data.userId}})
      } else{
        redirect('/Login')
      }
    })
  },[])


  return (
    <>
        <ul className="navList">
            {user !== '' ? <li><Link className="link" to='/home'>Home</Link></li> : '' }
            {user !== '' ? <li> <Link className="link" to='/mySpells'>My Saved Spells</Link></li> : ''}
            <li>
              <Link className="link" to='/spellBook'>Spell Book</Link>
            </li>
            <li>
                <Link className="link" to='/Register'>Register</Link>
            </li>
            <li>
                <Link className="link" to='/Login'>Login</Link>
            </li>
      
        </ul>
          
      <body>
      <Outlet />
      </body>
    </>
  )
};

export default Layout;