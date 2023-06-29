import { FaEye } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { BiSolidUpvote } from 'react-icons/bi'

const Thread = () => {
    return (
        <div className="flex flex-col w-[500px] h-[280px] bg-gray-300 border-4 border-black rounded-md">
            <div className="text-xl flex mx-auto mt-10 w-[400px] bg-white p-2 rounded-md">
                    This is the thread mnm nm nmna sdasdad sdsf
            </div>
                <div className="flex flex-row gap-x-12 mx-auto mb-8 items-end h-full">
                    <div className='flex flex-row'>
                        <FaEye size={50}/>
                        <div className='mt-2 ml-2 text-2xl'>
                            1000
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <AiFillHeart size={50}/>
                        <div className='mt-2 ml-2 text-2xl'>
                            1000
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <BiSolidUpvote size={50}/>
                        <div className='mt-2 ml-2 text-2xl'>
                            1000
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Thread