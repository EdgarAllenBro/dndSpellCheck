// import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"
import SpellDetails from "./spellDetails"

const SpellBook = ()=>{
const [allSpells,setAllSpells] = useState()
const [filterSpells ,setFilterSpells] = useState()
const [filter,setFilter] = useState('')
const [start,setStart] = useState(0)
const [end,setEnd] = useState(10)

const handleFilter = (e)=>{
    e.preventDefault()
    let filteredSpells = allSpells.filter((spell)=>{
        return spell.name.toLowerCase().includes(filter.toLowerCase())
    })
    setFilterSpells(filteredSpells)
}
const handleNext = ()=>{
    if(start < filterSpells.length && filterSpells.length > 10){
        setStart(start + 10)
        setEnd(end + 10)
    }
}
const handlePrevious = ()=>{
    if(start > 0){
        setStart(start - 10)
        setEnd(end - 10)
    }
}

useEffect(()=>{
    axios.get('https://www.dnd5eapi.co/api/spells').then((res)=>{
    setAllSpells(res.data.results)
    setFilterSpells(res.data.results)
})
},[])

    return filterSpells ? (
        <>
            <h1>Spell Book</h1>
           <form onSubmit={handleFilter}>
           <input onChange={(e)=>setFilter(e.target.value)} value={filter} />
            <button >filter</button>
           </form>
           <section className="spellSection">
                <table>
                    <tr>
                        <th>Spell</th>
                        <th>School</th>
                        <th>Duration</th>
                    </tr>
            {filterSpells.slice(start,end).map((spell)=>{
                return <SpellDetails key={spell.index} spell={spell.index}/>
            })}
                </table>
           </section>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </>
    ) : ''

}


export default SpellBook