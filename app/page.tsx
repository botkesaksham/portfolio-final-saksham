import Skills from '@/components/main/Skills'
import Projects from '@/components/main/Projects'
import Contact from '@/components/main/Contact'
import Experience from "@/components/main/Experience"

export default function Home() {
  return (
   <main className='h-full md:w-full'>
      <div className='flex flex-col gap-20'>
          <Experience/>
          <Skills/>
          <Projects/>
          <Contact/>
      </div>
   </main>
   
  )
}
