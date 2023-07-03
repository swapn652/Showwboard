import axios from "axios"

const getShows = async (name: string) => {
    try {
        const response = await axios.get(`https://cache.showwcase.com/user/${name}/projects`)
        console.log(response.data)
        let shows = response.data.slice(0, 4)
        return shows
    } catch (error) {
        console.log(error)
    }
}

export default getShows