import { FaEye } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { BiSolidUpvote } from 'react-icons/bi'

interface ThreadProps {
    message: string
    views: number
    likes: number
    upvotes: number
}

const Thread: React.FC<ThreadProps> = ({
    message,
    views,
    likes,
    upvotes
}) => {
    return (
        <div className="
            flex 
            flex-col 
            h-[180px] 
            w-[300px] 
            md:w-[500px] 
            md:h-[250px] 
            lg:w-[400px] 
            lg:h-[250px] 
            xl:w-[500px] 
            xl:h-[280px] 
            bg-gray-400 
            border-4 
            border-black 
            rounded-md"
        >
            <div className="
                text-xs 
                md:text-xl 
                flex 
                mx-auto 
                mt-10 
                h-[350px]
                w-[220px] 
                md:w-[425px] 
                lg:w-[320px] 
                xl:w-[400px] 
                bg-white 
                p-2 
                rounded-md"
            >
                <div className='
                    overflow-hidden
                    pd-2'
                >
                    { message.slice(0, 100) }...
                </div>
            </div>
                <div className="
                    flex 
                    flex-row 
                    gap-x-4 
                    mb-4 
                    md:gap-x-12 
                    md:mb-8 
                    lg:mb-6 
                    lg:gap-x-6 
                    xl:gap-x-12 
                    xl:mb-8 
                    mx-auto 
                    items-end 
                    h-full"
                >
                    <div className='flex flex-row'>
                        <FaEye className="
                            text-2xl 
                            md:text-5xl 
                            lg:text-4xl 
                            xl:text-5xl"
                        />
                        <div className='
                            md:mt-2 
                            md:text-2xl 
                            lg:mt-1 
                            lg:text-xl 
                            xl:mt-2 
                            ml-2 
                            xl:text-2xl'
                        >
                            { views }
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <AiFillHeart className="
                            text-2xl 
                            md:text-5xl 
                            lg:text-4xl 
                            xl:text-5xl"
                        />
                        <div className='
                            md:mt-2 
                            md:text-2xl 
                            lg:mt-1 
                            lg:text-xl 
                            xl:mt-2 
                            ml-2 
                            xl:text-2xl'
                        >
                           { likes }
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <BiSolidUpvote className="
                            text-2xl 
                            md:text-5xl 
                            lg:text-4xl 
                            xl:text-5xl"
                        />
                        <div className='
                            md:mt-2 
                            md:text-2xl 
                            lg:mt-1 ml-2 
                            lg:text-xl 
                            xl:mt-2 
                            xl:text-2xl'
                        >
                            { upvotes }
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Thread