import { useState } from "react";
import axios from 'axios'


 const Register = ()=> {
const [username,setUsername] = useState('')
const [password, setPassword] = useState('')
const [ConfirmPass, setConfirmPass] = useState('')
const [email, setEmail] = useState('')

const passwordMatch = ()=>{
    if(password !== ConfirmPass){
        return 'red'
    }
}
const user = {
    userName:username,
    password:password,
    email:email
}
const submitForm = (e)=>{
e.preventDefault()
axios.post('/newUser', user)
}
    return (
    <div>
        <form onSubmit={submitForm}>
            <input value={username} placeholder="Enter a Username" onChange={(e)=>{setUsername(e.target.value)}} />
            <input value={email} placeholder="Enter Email" onChange={(e)=>{ setEmail(e.target.value)}} />
            <input value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} type="password"  />
            <input value={ConfirmPass} placeholder="Confirm Password" onChange={(e)=>{setConfirmPass(e.target.value)}} className={passwordMatch()} type="password" />
        <button />
        </form>
    </div>
    )
}


export default Register