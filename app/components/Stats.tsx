'use client'

import { useState, useEffect } from 'react';
import getThreadsStats from '../hooks/getThreadsStats';
import getShowStats from '../hooks/getShowStats';


const Stats = () => {
    const [threadStats, setThreadStats] = useState<any>({})
    const [showStats, setShowStats] = useState<any>({})

    useEffect(() => {
        const fetchThreadStats = async () => {
            const threadStats = await getThreadsStats('tianrongliew')
            setThreadStats(threadStats)
            console.log(threadStats)
        }
        
        const fetchShowStats = async () => {
            const showStats = await getShowStats('tianrongliew')
            setShowStats(showStats)
        }

        fetchThreadStats()
        fetchShowStats()
    }, [])

  return (
    <div className="
      flex 
      flex-col 
      mt-10 
      ml-8 
      gap-y-20 
      md:flex 
      md:flex-row 
      md:mt-14 
      md:gap-x-20 
      md:ml-20 
      lg:mt-20 
      lg:gap-x-36 
      xl:mt-20 
      xl:gap-x-48"
    >
      <div className="flex flex-row">
        <div className="
          text-3xl 
          mt-8 
          md:text-3xl 
          md:mt-8 
          lg:text-4xl 
          lg:mt-12 
          xl:text-5xl 
          xl:mt-12"
        >
          THREADS
        </div>
        <div className="
          gap-y-14 
          text-xl 
          flex 
          flex-col 
          md:gap-y-14 
          md:text-xl 
          md:ml-6 
          lg:gap-y-20 
          lg:text-2xl 
          lg:ml-10 
          xl:gap-y-20 
          xl:text-3xl 
          xl:ml-10 
          text-gray-600"
        >
          <div>
            COUNT: {threadStats.numberOfThreads}
          </div>
          <div>
            VIEWS: {threadStats.numberOfViews}
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="
          text-3xl 
          mt-8 
          md:text-3xl 
          md:mt-8 
          lg:text-4xl 
          lg:mt-12 
          xl:text-5xl 
          xl:mt-12"
        >
          SHOWS
        </div>
        <div className="
          gap-y-14 
          text-xl 
          flex 
          flex-col 
          md:gap-y-14 
          md:text-xl 
          md:ml-6 
          lg:gap-y-20 
          lg:text-2xl 
          lg:ml-10 
          xl:gap-y-20 
          xl:text-3xl 
          xl:ml-10 
          text-gray-600">
          <div>
            COUNT: {showStats.numberOfShows}
          </div>
          <div>
            VIEWS: {showStats.numberOfViews}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
