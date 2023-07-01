'use client'

import React, { useState, useEffect } from "react";
import User from "./User";
import getFollowers from "../hooks/getFollowers";

const Followers = () => {
  const [followerDetails, setFollowerDetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const followers = await getFollowers('tianrongliew');
        setFollowerDetails(followers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFollowers();
  }, []);

  return (
    <>
    <div className="flex flex-row justify-center mt-20">
        <div className="bg-gray-400 flex flex-col w-[670px] md:h-[300px] p-4 border-4 border-black rounded-lg">
            <div className="text-3xl md:text-5xl">
                RECENT FOLLOWERS:
            </div>
            <div className="flex flex-col md:flex-row mx-auto mt-8 gap-y-10 md:gap-x-14">
            {followerDetails &&
                followerDetails.map((obj: any, index: number) => (
                <User key={index} name={obj.displayName} imgUrl={obj.profilePictureUrl} />
                ))}
            </div>
        </div>
        </div>
    </>
  );
};

export default Followers;
