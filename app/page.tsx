import Skills from '@/components/main/Skills'
import Projects from '@/components/main/Projects'
import Contact from '@/components/main/Contact'
import Experience from "@/components/main/Experience"
import About from '@/components/main/About'

export default function Home() {
  return (
   <main className='h-full md:w-full'>
      <div className='flex flex-col gap-20 snap-y snap-mandatory scrollbar scrollbar-track-black/20 scrollbar-thumb-[#FB923C]'>
          <About/>
          <Experience/>
          <Skills/>
          <Projects/>
          <Contact/>
      </div>
   </main>
   
  )
}
