import axios from "axios";


let spells  = []


export default {

    getAllSpells: (req,res)=>{
        res.send(spells)
      },

    serverGetSpells:()=>{
        axios.get('https://www.dnd5eapi.co/api/spells').then(
    (res)=>{
      res.data.results.forEach( element => {
      axios.get('https://www.dnd5eapi.co' + element.url).then((res)=>{
        console.log(res.data)
        spells.push(res.data)
      }
        )
      });
    }
)
    }
}