const data = await import('./spells.json',{assert:{type:'json'}})

export default {

    getAllSpells: (req,res)=>{
        res.send(data.default.spells)
      }
}