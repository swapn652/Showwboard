import Image from "next/image"

const User = () => {
    return (
        <div className="h-40 w-40 bg-gray-300 border-2 border-black rounded-md">
            <div className='flex flex-col items-center mt-4'>
                <Image src="/test/leomord.png" alt="user" height={100} width={100} className="h-24 w-24 border-2 border-black rounded-md"/>
                <div className="mt-2 text-xl">
                    Leomord
                </div>
            </div>
        </div>
    )
}

export default User