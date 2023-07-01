import axios from "axios"

const getStats = async () => {
    try{
        const response = await axios.get('https://cache.showwcase.com/threads?username=swapn652')
        let numberOfThreads = response.data.length

        return {
            numberOfThreads: numberOfThreads
        }
    }catch(error){
        console.log(error)
    }
}

export default getStats