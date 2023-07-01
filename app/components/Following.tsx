'use client'

import React, { useState, useEffect } from "react";
import User from "./User";
import getFollowing from "../hooks/getFollowing";

const Following = () => {
  const [followingDetails, setFollowingDetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const following = await getFollowing('tianrongliew');
        setFollowingDetails(following);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFollowing();
  }, []);

  return (
    <>
    <div className="flex flex-row justify-center mt-20">
        <div className="bg-gray-400 flex flex-col w-[670px] md:h-[300px] p-4 border-4 border-black rounded-lg">
            <div className="text-3xl md:text-5xl">
                RECENT FOLLOWING:
            </div>
            <div className="flex flex-col md:flex-row mx-auto mt-8 gap-y-10 md:gap-x-14">
            {followingDetails &&
                followingDetails.map((obj: any, index: number) => (
                <User key={index} name={obj.displayName} imgUrl={obj.profilePictureUrl} />
                ))}
            </div>
        </div>
        </div>
    </>
  );
};

export default Following;
