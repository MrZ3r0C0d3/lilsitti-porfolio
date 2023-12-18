import Image from 'next/image'
import HomeIntroduction from './components/HomeIntroduction'
import HomeAboutMe from './components/HomeAboutMe'
import HomeProject from './components/HomeProject'
import HomeContact from './components/HomeContact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <HomeIntroduction />
      <HomeAboutMe />
      <HomeProject />
      <HomeContact />
    </main>
  )
}
