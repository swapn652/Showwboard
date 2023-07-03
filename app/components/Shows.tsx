'use client'
import { useState, useEffect } from "react";
import getShows from "../hooks/getShows";
import Show from "./Show";

interface ShowsProps {
  username: string
}

const Shows = ({ username }: ShowsProps) => {
    const [showsList, setShowsList] = useState<any[]>([]);

    useEffect(() => {
      const fetchshows = async () => {
        const shows = await getShows(username);
        console.log(shows);
        setShowsList(shows);
        console.log(showsList);
      };
      fetchshows();
    }, []);

    return (
        <>
        <div className="text-3xl md:text-6xl ml-10 mt-20">RECENT SHOWS</div>
        <div className="flex flex-row flex-wrap gap-x-20 gap-y-20 mt-10 justify-center">
            {showsList &&
                showsList.map((obj: any, index: number) => (
                <Show
                    key={index}
                    bannerImgUrl={obj.coverImage}
                    views={obj.views}
                    likes={obj.totalUpvotes}
                    showUrl={obj._self}
                />
                ))}
        </div>
    </>
    )
}

export default Shows