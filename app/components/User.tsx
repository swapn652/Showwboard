'use client'

import Image from "next/image"

interface UserProps {
    name: string
    imgUrl: string
}

const User: React.FC<UserProps> = ({name, imgUrl}) => {
    const reduceName = (name: string) => {
        if(name.split(" ").length>2){
            const [firstName, middleName] = name.split(" ", 2);
            const firstAndMiddleName = `${firstName} ${middleName}`;
            return firstAndMiddleName
        }

        return name
    }

    return (
        <div className="h-40 w-40 bg-gray-300 border-2 border-black rounded-md">
            <div className='flex flex-col items-center mt-4'>
                <Image 
                    src={imgUrl}
                    alt="user" 
                    height={100} 
                    width={100} 
                    className="h-24 w-24 border-2 border-black rounded-md"
                />
                <div className="mt-2 text-lg">
                    {reduceName(name)}
                </div>
            </div>
        </div>
    )
}

export default User