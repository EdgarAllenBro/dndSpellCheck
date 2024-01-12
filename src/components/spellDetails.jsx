import { useState } from "react"
import axios from "axios"


const SpellDetails = ({spell, parent})=>{
const [hidden,sethidden] = useState(true)

const handleClick = ()=>{
    sethidden(!hidden)
}
const saveSpell = ()=>{
let body = {spell:spell.index}
    axios.post('/spell', body)
}
const removeSpell = ()=>{
        axios.delete('/spell/'+spell.index)
}

return (

    <div className="spellBox">
        <div className="spellCard" onClick={handleClick}>
            <div className="spellDetail">{spell.name}</div>
            <div className="spellDetail">{spell.school.name}</div>
            <div className="spellDetail">{spell.casting_time}</div>
            <div className="spellDetail">{spell.level === 0 ? 'Cantrip' : spell.level }</div>
            {/* <div>{spell.duration}</div> */}
        </div>
        {!hidden ? <div className="spellDesc">
         <p>
             {spell.desc}
         </p>
         {parent === 'spellBook' ? 
         <button className="saveBtn" onClick={saveSpell} >Save Spell</button>
         : <button className="removeBtn" onClick={removeSpell} >Remove</button>}
        </div>:''}
    </div>

)
}
 
export default SpellDetails