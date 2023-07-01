import axios from "axios"

const getFollowers = async (name: string) => {
    try{
        const response = await axios.get(`https://cache.showwcase.com/network/followers?username=${name}`)
        const followers = response.data.slice(0, 3)
        return followers
    } catch(error) {
        console.log(error)
    }
}

export default getFollowers