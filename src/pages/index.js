import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/NisaProfile.JPG"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nisa Jamalia | Portfolio</title>
        <meta name="description" content="Nisa Jamalia - Portfolio website" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
            
            {/* FOTO PROFIL */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={profilePic}
                alt="Nisa Jamalia"
                className="w-3/4 h-auto rounded-2xl shadow-lg"
                priority
              />
            </div>

            {/* TEKS UTAMA */}
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left '/>
              <p className='my-4 text-base font-medium'>
                I’m a Computer Science student at BINUS University with a strong passion in IT,
                especially in mobile app development and UI/UX design. With over 3 years of
                experience in Android development using Kotlin, I’m excited to use my skills and
                keep learning through real-world experience.
              </p>
            </div>
            <div className='flex items-center self-start mt-2'>
            <Link href="/CurriculumVitae _NisaJamalia.pdf" target={"_blank"}
            className='flex items-center bg-dark text-light p-2.5 px-6
            rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
            border-2 border-solid border-transparent hover:border-dark
            '
            download={true}
            >Resume</Link>
            <Link href="Email:nisajamalia99@gmail.com" target={"_blank"}
            className='ml-4 text-lg font-medium capitalize text-dark underline'
            
            >Contact</Link>
           </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
