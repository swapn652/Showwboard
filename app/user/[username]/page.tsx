'use client'

import Followers from "@/app/components/Followers"
import Following from "@/app/components/Following"
import Footer from "@/app/components/Footer"
import Profile from "@/app/components/Profile"
import Shows from "@/app/components/Shows"
import Stats from "@/app/components/Stats"
import Threads from "@/app/components/Threads"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

const Username = () => {
    const pathName = usePathname()
    const name = pathName.slice(6)

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <Profile username = { name }/>
                    <Stats username = { name }/>
                    <hr className='h-[10px] border-[6px] border-black mt-20'/>
                    <Followers username = { name }/>
                    <Following username = { name } />
                    <hr className='h-[10px] border-[6px] border-black mt-20'/>
                    <Threads username = { name }/>
                    <hr className='h-[10px] border-[6px] border-black mt-20'/>
                    <Shows username = { name }/>
                </div>
                <div className="mt-20">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Username