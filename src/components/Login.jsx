import { useState } from "react";
import axios from 'axios'


 const Login = ()=> {
const [username,setUsername] = useState('')
const [password, setPassword] = useState('')

const user = {
    userName:username,
    password:password,
}
const submitForm = (e)=>{
e.preventDefault()
axios.post('/loginUser', user).then((res)=>{
    let {data} = res
    if(data.userId){
        alert('welcome, ' + data.userName)


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