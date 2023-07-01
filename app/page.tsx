import Followers from './components/Followers'
import Profile from './components/Profile'
import Show from './components/Show'
import Stats from './components/Stats'
import Thread from './components/Thread'
import User from './components/User'

export default function Home() {
  return (
    <>
      <Profile/>
      <Stats/>
      <hr className='h-[10px] border-[6px] border-black mt-20'/>
      <Followers/>
      <Thread/>
      <Show/>
    </>
  )
}
