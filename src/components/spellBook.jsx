import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


const SpellBook = ()=>{
const [allSpells,setAllSpells] = useState()

useEffect(()=>{
    axios.get('https://www.dnd5eapi.co/api/spells').then((res)=>{
    setAllSpells(res.data.results)
    console.log('setting all spells')
})
},[])

    return (
        <>
            <h1>Spell Book</h1>
        </>
    )

}


export default SpellBook