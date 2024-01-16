import { useState } from "react"
import axios from "axios"
import Draggable from "react-draggable"
import SpellModel from "./SpellModel"

const SpellDetails = ({spell, parent, addModel, modalList})=>{
const [hidden,sethidden] = useState(true)
const [hasModal, setHasModal] = useState(false)

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
const createModal = ()=>{
    if(!hasModal){
        addModel(modalList.concat(<SpellModel spell={spell}/>))
        setHasModal(true)
    }
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
         : <div className="spellBtns">
         <button className="removeBtn" onClick={removeSpell}>Remove</button>
         <button onClick={createModal}>Spell Roller</button>
         </div>}
        </div>:''
        }
    </div>

)
}
 
export default SpellDetails