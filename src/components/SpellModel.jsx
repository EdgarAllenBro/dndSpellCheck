import { useState } from "react"
import Draggable from "react-draggable"


const SpellModel = ({spell})=>{
    //grab the object keeping track of spell slot levels and dice used at each level
    let spellSlotLevels = spell.damage.damage_at_slot_level
    //state value used to display result from a dice roll
    const [results,setResults] = useState(0)
    //state value to keep track of current spell level selected
    const [spellSlot, setSpellSlot] = useState(Object.keys(spellSlotLevels)[0])
    //grab spells damage to make sure that the current spell has a damage property
    let hasDamage = spell.damage

    //function to determine random number based on selected slot level and number and type of dice to roll at that level
    const rollSpell = ()=>{
        if(hasDamage){
            //array to keep track of rolled numbers
            let diceRolls = []
            //splits the dice 'quantity and type' string so the numbers can be used
            let dice = spellSlotLevels[spellSlot].split('d')
            //loop to create random numbers for each die to be rolled
            for(let i = 0;i<dice[0];i++){
               diceRolls.push(Math.ceil((Math.random() * dice[1])))
            }
            //set results to be displayed
            setResults(diceRolls.reduce((a,c)=> a + c))
        }
    }



    return (
        <Draggable>
            <div className="spellModal">
                {spell.name}
                <p>{results}</p>
                <p>{spellSlotLevels[spellSlot]}</p>
                <select onChange={(e)=>setSpellSlot(e.target.value)} value={spellSlot}>
                    {Object.keys(spellSlotLevels).map((e)=>{
                       return <option key={e} value={e}>{e}</option>})}
                </select>
                <button onClick={rollSpell}>roll Dice</button>
            </div>
        </Draggable>
    )
}

export default SpellModel