// import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { redirect } from "react-router-dom"


const SpellBook = ()=>{
const [allSpells,setAllSpells] = useState()
const [filterSpells ,setFilter] = useState()
const redirect = useNavigate()

useEffect(()=>{
    axios.get('https://www.dnd5eapi.co/api/spells').then((res)=>{
    setAllSpells(res.data.results)
    setFilter(res.data.results)
})
},[])

    return (
        <>
            <h1>Spell Book</h1>

            <div>{filterSpells ? filterSpells.map((spell)=>{
                return <p onClick={()=>redirect('/spellDetails',{state:{index:spell.index,name:spell.name}})} className="listSpell" key={spell.index}>{spell.name}</p>
            }):''}</div>
        </>
    )

}


export default SpellBook