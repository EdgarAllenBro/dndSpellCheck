import { useEffect, useState } from "react"



const SpellDetails = ({spell})=>{
const [hidden,sethidden] = useState(true)

const handleClick = ()=>{
    sethidden(!hidden)
}


return (

    <div className="spellBox" onClick={handleClick}>
        <div className="spellCard">
            <div className="spellDetail">{spell.name}</div>
            <div className="spellDetail">{spell.school.name}</div>
            <div className="spellDetail">{spell.casting_time}</div>
            <div className="spellDetail">{spell.level === 0 ? 'Cantrip' : spell.level }</div>
            {/* <td>{spell.duration}</td> */}
        </div>
        {!hidden ? <div className="spellDesc">
            {spell.desc}
        </div>:''}
    </div>

)
}
 
export default SpellDetails