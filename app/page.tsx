import Skills from '@/components/main/Skills'
import About from '@/components/main/About'
import Projects from '@/components/main/Projects'
import Contact from '@/components/main/Contact'
import Experience from "@/components/main/Experience"
import Footer from '@/components/main/Footer'

export default function Home() {
  return (
   <main className='h-full md:w-full'>
      <div className='flex flex-col gap-20'>
          <About/>
          <Experience/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>
   </main>
   
  )
}
