const data = await import('./spells.json' , {assert:{type:'json'}})
import {SavedSpells} from '../db/model.js'

export default {

    getAllSpells: (req,res)=>{
        res.send(data.default.spells)
      },
    saveSpell: async (req,res)=>{
     let {spell} =  req.body
     let dupeSpell = await SavedSpells.findOne({where:{userId:req.session.user.userId, spell:spell}})
     if(!dupeSpell){
       const savedSpell = await SavedSpells.create({
         spell: spell,
         userId: req.session.user.userId
       })
     } else{
      res.send('that spell is already in list')
     }
    },
    savedSpells: async (req,res)=>{
      let userId = req.session.user.userId
      const spellsList = await SavedSpells.findAll({
        where:{userId:userId}
      })
      console.log(spellsList)
      let spells = spellsList.map(spell => spell.spell)
      let userSpells = data.default.spells.filter(spell=> spells.includes(spell.index))
      res.json(userSpells)
    },
    delete: async (req,res)=>{
      const spell = await SavedSpells.findOne({where:{userId:req.session.user.userId, spell:req.params.spell}})
      if(spell){
        spell.destroy()
      }
      res.status(200).send('spell deleted')
    }
}