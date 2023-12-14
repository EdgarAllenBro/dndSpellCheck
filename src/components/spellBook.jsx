// import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import SpellDetails from "./spellDetails"

const SpellBook = ()=>{
const [allSpells,setAllSpells] = useState()
const [filterSpells ,setFilterSpells] = useState()
const [filter,setFilter] = useState('')
const [start,setStart] = useState(0)
const [end,setEnd] = useState(10)
const redirect = useNavigate()

const handleFilter = (e)=>{
    e.preventDefault()
    let filteredSpells = allSpells.filter((spell)=>{
        return spell.name.toLowerCase().includes(filter.toLowerCase())
    })
    setFilterSpells(filteredSpells)
}
const handleNext = ()=>{
    if(start < 309){
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

    return (
        <>
            <h1>Spell Book</h1>
           <form onSubmit={handleFilter}>
           <input onChange={(e)=>setFilter(e.target.value)} value={filter} />
            <button >filter</button>
           </form>
                <table>
                    <tr>
                        <th>Spell</th>
                        <th>School</th>
                        <th>Duration</th>
                    </tr>
            {filterSpells ? filterSpells.slice(start,end).map((spell)=>{
                return <SpellDetails key={spell.index} spell={spell.index}/>
            }):''}
                </table>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </>
    )

}


export default SpellBook