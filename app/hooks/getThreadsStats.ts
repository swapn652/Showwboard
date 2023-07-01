import axios from "axios"

const getThreadsDetails = async(name: string) => {
    try{
        const response = await axios.get(`https://cache.showwcase.com/threads?username=${name}`)
        let numberOfViews = 0

        for(let obj of response.data){
            numberOfViews+=obj.views
        }
        return {
            numberOfThreads: response.data.length,
            numberOfViews: numberOfViews
        }
    } catch(error) {
        console.log(error)
    }
}

export default getThreadsDetails