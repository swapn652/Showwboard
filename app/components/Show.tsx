import Image from "next/image"
import { AiFillHeart } from "react-icons/ai"
import { FaEye } from "react-icons/fa"

const Show =  () => {
    return (
        <div className='
            w-[300px] 
            h-[300px] 
            md:w-[500px] 
            md:h-[400px] 
            xl:w-[500px] 
            xl:h-[400px] 
            lg:h-[300px] 
            lg:w-[400px] 
            bg-gray-300 
            border-4 
            border-black 
            rounded-lg'
        >
            <div className="flex flex-col">
                <Image 
                    src="/test/leomord.png" 
                    alt="user" 
                    height={100} 
                    width={100} 
                    className="
                        h-[150px] 
                        w-[240px] 
                        md:h-[220px] 
                        md:w-[400px] 
                        xl:h-[220px] 
                        xl:w-[400px] 
                        lg:h-[180px] 
                        lg:w-[300px] 
                        mt-4 border-2 
                        border-black 
                        rounded-md 
                        self-center"
                    />
                <div className="
                    flex 
                    flex-row 
                    mt-6 
                    gap-x-14 
                    md:gap-x-20 
                    lg:gap-x-20 
                    md:mt-6 
                    xl:mt-6 
                    lg:mt-4 
                    mx-auto"
                >
                    <div className="flex flex-row">
                        <FaEye className="
                            text-4xl 
                            md:text-5xl 
                            xl:text-5xl 
                            lg:text-3xl"
                        />
                        <div className="
                            text-xl 
                            mt-[4px] 
                            ml-2 
                            md:text-2xl 
                            md:ml-2 
                            md:mt-[6px] 
                            xl:ml-2 
                            xl:mt-2 
                            xl:text-2xl 
                            lg:text-lg"
                        >
                            1000
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <AiFillHeart className="
                            text-4xl 
                            md:text-5xl 
                            xl:text-5xl 
                            lg:text-3xl"
                        />
                        <div className="
                            text-xl 
                            mt-[4px] 
                            ml-2 
                            md:ml-2 
                            md:mt-2 
                            md:text-2xl 
                            xl:ml-2 
                            xl:mt-2 
                            xl:text-2xl 
                            lg:text-lg"
                        >
                            1000
                        </div>
                    </div>
                </div>
                <div className="
                    w-[240px]
                    h-[35px] 
                    mt-6 
                    md:w-[400px] 
                    md:h-[50px] 
                    md:mt-6 
                    xl:w-[400px] 
                    xl:h-[50px] 
                    xl:h lg:w-[300px] 
                    lg:h-[30px] 
                    bg-white 
                    mx-auto 
                    xl:mt-6 
                    lg:mt-2 
                    border-2 
                    border-black 
                    rounded-md"
                >
                </div>
            </div>
        </div>
    )
}

export default Show