import axios from "axios"

const getThreads = async (name: string) => {
    try {
        const response = await axios.get(`https://cache.showwcase.com/threads?username=${name}`)
        console.log(response.data)
        let threads = response.data.slice(0, 4)
        return threads
    } catch (error) {
        console.log(error)
    }
}

export default getThreads