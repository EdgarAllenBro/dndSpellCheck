import { useEffect, useState } from "react"
import axios from "axios"



const SpellDetails = ({spell})=>{
const [hidden,sethidden] = useState(true)
const [spellDetails,setDetails] = useState()
const handleClick = ()=>{
    sethidden(!hidden)
}

return (
    <tr>
        <td>{spell.name}</td>
        <td>{spell.school.name}</td>
        <td>{spell.casting_time}</td>
        <td>{spell.level === 0 ? 'Cantrip' : spell.level }</td>
        {/* <td>{spell.duration}</td> */}
    </tr>
)
}
 
export default SpellDetails