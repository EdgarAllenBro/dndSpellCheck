import { useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


 const Login = ()=> {
const [username,setUsername] = useState('')
const [password, setPassword] = useState('')
const redirect = useNavigate()
const dispatch = useDispatch()
const user = {
    userName:username,
    password:password,
}

const submitForm = (e)=>{
e.preventDefault()
axios.post('/loginUser', user).then((res)=>{
    let {data} = res
    if(data.userId){
        dispatch({type:'login', payload:{userName:data.userName, userId:data.userId}})
       redirect('/home')
    } else{
        alert(data.message)
    }
})

}
    return (
    <div>
        <form onSubmit={submitForm}>
            <input value={username} placeholder="Enter a Username" onChange={(e)=>{setUsername(e.target.value)}} />
            <input value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} type="password"  />
        <button />
        </form>
    </div>
    )
}


export default Login