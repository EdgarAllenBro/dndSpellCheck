import { useState, useEffect } from "react"
import axios from "axios"
import SpellDetails from "./spellDetails"

const MySpells  = () => {
    const [mySpells,setAllSpells] = useState([])
     useEffect(()=>{
        axios.get('http://localhost:8000/savedSpells').then((res)=>{
            setAllSpells(res.data)
    })
    },[])

    return(
        <div>
          <section className="spellSection">
                 <thead>
                    <div className="spellTableHead">
                        <div className="spellHead" value={false} id={'spell'} >Spell</div>
                        <div className="spellHead" value={false} id={'school'} >School</div>
                        <div className="spellHead" value={false} id={'casting_time'} >Cast Time</div>
                        <div className="spellHead" value={false} id={'level'} >Level</div>
                        {/* <th value={false} id={'duration'}>Duration</th> */}
                    </div>
                 </thead>
                 <tbody>
            {mySpells.map((spell)=>{
                return <SpellDetails key={spell.index} spell={spell} parent={'mySpells'}/> 
            })}
                 </tbody>
           </section>
        </div>
    )
}

export default MySpells