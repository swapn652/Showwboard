import axios from "axios"

const getShowStats = async (name: string) => {
    try {
        const response = await axios.get(`https://cache.showwcase.com/user/${name}/projects`)
        let numberOfViews = 0
        for(let obj of response.data){
            numberOfViews+=obj.views
        }

        return {
            numberOfShows: response.data.length,
            numberOfViews: numberOfViews
        }
    } catch(error) {
        console.log(error)
    }
}

export default getShowStats