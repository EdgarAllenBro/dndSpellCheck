import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"



const SpellDetails = ()=>{
const location = useLocation()
const [spellDetails,setDetails] = useState()

useEffect(()=>{
    axios.get('https://www.dnd5eapi.co/api/spells/' + location.state.index).then((res)=>{
    setDetails(res.data)
    })
},[])

    return (
        <div>{ spellDetails ?  <>
            <h1>{location.state.name}</h1>  
            <h3>School: {spellDetails.school.name}</h3> 
            <p>{spellDetails.desc}</p>
        </> : ''}</div>
    )
}

export default SpellDetails