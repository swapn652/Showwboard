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
      <Thread/>
      {/* <User/> */}
      <Show/>
    </>
  )
}
