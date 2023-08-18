import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api/",
    params:{
        key:'aea423ae8fbe4fbbb0fc1bcd3568f1a0'
    }
})