import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


 const Register = ()=> {
const [username,setUsername] = useState('')
const [password, setPassword] = useState('')
const [ConfirmPass, setConfirmPass] = useState('')
const [email, setEmail] = useState('')
const [showPass,setShowPass] = useState(false)
const redirect = useNavigate()
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
if(username === '' || password === ''){
    alert('cannot have empty username or password')
} else {
    axios.post('/newUser', user).then((res)=>{
        console.log(res.data.message)
        if(res.data.message === 'username or email already in use'){
            alert('username or email already in use')
        }
        else{
            redirect('/login')
        }
    })
}
}
    return (
    <div>
        <form className="register_form" onSubmit={submitForm}>
            <input value={username} placeholder="Enter a Username" onChange={(e)=>{setUsername(e.target.value)}} />
            <input value={email} placeholder="Enter Email" onChange={(e)=>{ setEmail(e.target.value)}} />
            <input value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} type={showPass ? 'text' : 'password'}  />
            <input value={ConfirmPass} placeholder="Confirm Password" onChange={(e)=>{setConfirmPass(e.target.value)}} className={passwordMatch()} type={showPass ? 'text' : 'password'} />
            <button type="button" onClick={()=>{setShowPass(!showPass)}}>Show Password</button>
            <button >Submit</button>
        </form>
    </div>
    )
}


export default Register