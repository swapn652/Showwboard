import Followers from './components/Followers'
import Following from './components/Following'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Search from './components/Search'
import Show from './components/Show'
import Shows from './components/Shows'
import Stats from './components/Stats'
import Thread from './components/Thread'
import Threads from './components/Threads'
import User from './components/User'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Search/>
      </div>
      <Footer/>
    </div>
  )
}
