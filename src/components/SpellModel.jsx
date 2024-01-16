import { useState } from "react"
import Draggable from "react-draggable"


const SpellModel = ({spell})=>{
    const [results,setResults] = useState(0)

    const rollSpell = ()=>{

    }



    return (
        <Draggable>
            <div className="spellModal">
                {spell.name}
                <p>{results}</p>
            </div>
        </Draggable>
    )
}

export default SpellModel