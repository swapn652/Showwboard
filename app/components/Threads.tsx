'use client'

import { useState, useEffect } from "react";
import getThreads from "../hooks/getThreads";
import Thread from "./Thread";

interface ThreadsProps {
  username: string
}

const Threads = ({ username }: ThreadsProps) => {
  const [threadsList, setThreadsList] = useState<any[]>([]);

  useEffect(() => {
    const fetchThreads = async () => {
      const threads = await getThreads(username);
      console.log(threads);
      setThreadsList(threads);
      console.log(threadsList);
    };
    fetchThreads();
  }, []);

  return (
    <>
        <div className="text-3xl md:text-6xl ml-10 mt-20">RECENT THREADS</div>
        <div className="flex flex-row flex-wrap gap-x-20 gap-y-20 mt-10 justify-center">
            {threadsList &&
                threadsList.map((obj: any, index: number) => (
                <Thread
                    key={index}
                    message={obj.message}
                    views={obj.views}
                    likes={obj.totalUpvotes}
                    upvotes={obj.totalBoosts}
                />
                ))}
        </div>
    </>
  );
};

export default Threads;
