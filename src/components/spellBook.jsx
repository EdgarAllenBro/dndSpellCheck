// import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


const SpellBook = ()=>{
const [allSpells,setAllSpells] = useState()
const [filterSpells ,setFilterSpells] = useState()
const [filter,setFilter] = useState('')
const redirect = useNavigate()

const handleFilter = ()=>{
    setFilterSpells()
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
            <input onChange={(e)=>setFilter(e.target.value)} value={filter} />
            <div>{filterSpells ? filterSpells.map((spell)=>{
                return <p onClick={()=>redirect('/spellDetails',{state:{index:spell.index,name:spell.name}})} className="listSpell" key={spell.index}>{spell.name}</p>
            }):''}</div>
        </>
    )

}


export default SpellBook