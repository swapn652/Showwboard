'use client'

import Image from "next/image"
import getUserDetails from "../hooks/getUserDetails"
import { useState, useEffect } from "react";

interface UserProps {
    activityMessage: string | null
    displayName: string | null
    profilePictureKey: string | null
}

const Profile = () => {
    const [user, setUser] = useState<UserProps | undefined>({ activityMessage: null, displayName: null, profilePictureKey: null });

    useEffect(() => {
      const fetchUserDetails = async () => {
        try {
          const userDetails = await getUserDetails("tianrongliew");
          setUser(userDetails);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchUserDetails();
    }, []);
    
    return (
        <div className="flex flex-col">
            <div>
                <div className="
                    absolute 
                    top-0 
                    left-0 
                    w-full
                    ">
                    <Image 
                        src='/test/banner.png'
                        width="200" height="200" 
                        alt="Banner" 
                        className="w-full h-[300px]" 
                    />
                </div>
                <div className="flex flex-row">
                    <div className="
                        z-10 
                        relative 
                        ml-4 
                        mt-56 
                        md:ml-20
                        ">
                        <Image 
                            alt="user image" 
                            src={ user?.profilePictureKey || '/test/leomord.png' }
                            width="100" 
                            height="100" 
                            className="w-40 h-40 rounded-full"
                        />
                    </div>

                    <div className="z-10 relative"> 
                        <div className="mt-[12.5em] md:mt-[8.3em] text-2xl md:text-4xl">
                            {user?.displayName}
                        </div>

                        <div className="text-xl md:text-2xl text-gray-600">
                            {user?.activityMessage}
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Profile