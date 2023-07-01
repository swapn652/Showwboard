import axios from "axios"

const getFollowers = async (name: string) => {
    try{
        const response = await axios.get(`https://cache.showwcase.com/network/following?username=${name}`)
        const followers = response.data.slice(0, 3)
        console.log(followers)   
        return followers
    } catch(error) {
        console.log(error)
    }
}

export default getFollowers