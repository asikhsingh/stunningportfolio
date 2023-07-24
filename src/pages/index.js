import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
// import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
      <title>Amritpal Singh | UX DESIGNER</title>
        <meta name="description" content="Generated by create next app" />
        

      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light dark:bg-dark'>
        <Layout className='pt-2 md:p-2 sm:pt-0'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Amritpal Singh" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority
              sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw,
              50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText text="UX DESIGNER | STOCATE " className='!text-xl !text-left 
              xl:!text-xl lg:!text-center lg:!text-xl md:!text-base sm:!text-!xl 
              '/>
              <AnimatedText text="AMRITPAL SINGH" className='!text-5xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-3xl sm:!text-!2xl 
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              I love solving real problems supported by UX research for real people and focus on creating experiences that are functional, equitable, and visually compelling.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                {/* <Link href="/projects" target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid dorder-transparent hover:border-dark
                
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light md:p-2 md:px-4 md:text-base

                '

                download={true}
                ><Projects></Projects><LinkArrow className='w-6 ml-1 
                lg:hidden' />

                </Link> */}
                <Projects /> 
                <Link href="https://calendly.com/sikhamritpalsingh/30min" target={'_blank'}
                className='/=flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-sm font-semibold hover:bg-primary hover:text-light border border-solid border-dark hover:border-light
                
                dark:bg-dark dark:text-light dark:hover:bg-primary dark:hover:text-light dark:border-light md:p-2 md:px-4 md:text-sm

                '
                >CONSULTATION</Link>

              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="Amritpal Singh" className='w-full h-auto' />
        </div>
        
      </main>
      <Footer></Footer>
    </>
  )
}