import axios from "axios";


let spells  = []


axios.get('https://www.dnd5eapi.co/api/spells').then(
    (res)=>{

        console.log(res)
    }
)

export default {
    
}