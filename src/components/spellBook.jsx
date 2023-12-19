// import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"
import SpellDetails from "./spellDetails"

const SpellBook = ()=>{
const [render,setRender] = useState(true)
const [allSpells,setAllSpells] = useState()
const [filterSpells ,setFilterSpells] = useState()
const [filter,setFilter] = useState('')
const [end,setEnd] = useState(10)

const handleFilter = (e)=>{
    e.preventDefault()
    let filteredSpells = allSpells.filter((spell)=>{
        return spell.name.toLowerCase().includes(filter.toLowerCase())
    })
    setFilterSpells(filteredSpells)
}

const handleSort = (e)=>{
    filterSpells.sort((a,b)=>{
        if(a.name < b.name){
            return -1
        }
        else{
            return 1
        }
    })
if(e.target.id === 'school'){ 
    if(e.target.value === false){
        filterSpells.sort((a,b)=>{
            if(a[e.target.id].index < b[e.target.id].index){
                return 1
            }
            else{
                return -1
            }
        })
    } else {
        filterSpells.sort((a,b)=>{
            if(a[e.target.id].index < b[e.target.id].index){
                return -1
            }
            else{
                return 1
            }
        })
    }

} else {
    if(e.target.value === false){
        filterSpells.sort((a,b)=>{
            if(a[e.target.id] < b[e.target.id]){
                return 1
            }
            else{
                return -1
            }
        })
    } else {
        filterSpells.sort((a,b)=>{
            if(a[e.target.id] < b[e.target.id]){
                return -1
            }
            else{
                return 1
            }
        })
    }
}
    e.target.value = !e.target.value
    setRender(!render)
}
const handleNext = ()=>{
    if(0 < filterSpells.length && filterSpells.length > 10){
        setEnd(end + 10)
    }
}

useEffect(()=>{
    axios.get('http://localhost:8000/allSpells').then((res)=>{
        let spells = res.data
        spells.sort((a,b)=>{
            if(a.name < b.name){
                return -1
            }
            else{
                return 1
            }
        })
    setAllSpells(spells)
    setFilterSpells(spells)
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
                <section>
                 <thead>
                    <div className="spellTableHead">
                        <div className="spellHead" value={false} id={'spell'} onClick={handleSort}>Spell</div>
                        <div className="spellHead" value={false} id={'school'} onClick={handleSort}>School</div>
                        <div className="spellHead" value={false} id={'casting_time'} onClick={handleSort}>Cast Time</div>
                        <div className="spellHead" value={false} id={'level'} onClick={handleSort}>Level</div>
                        {/* <th value={false} id={'duration'}>Duration</th> */}
                    </div>
                 </thead>
                 <tbody>
            {filterSpells.slice(0,end).map((spell)=>{
                return <SpellDetails key={spell.index} spell={spell}/>
            })}
                 </tbody>
                </section>
           </section>
            {/* <button onClick={handlePrevious}>Previous</button> */}
            <button onClick={handleNext}>Show More</button>
        </>
    ) : ''

}


export default SpellBook