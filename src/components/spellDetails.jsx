import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"



const SpellDetails = ({spell})=>{
    console.log(spell)
const [spellDetails,setDetails] = useState()

useEffect(()=>{
    axios.get('https://www.dnd5eapi.co/api/spells/' + spell).then((res)=>{
    setDetails(res.data)
    })
},[])

    return spellDetails ? 
    <tr>
        <td>{spellDetails.name}</td>  
        <td>{spellDetails.school.name}</td> 
        <td>{spellDetails.duration}</td>
    </tr> : '' 
}
 
export default SpellDetails