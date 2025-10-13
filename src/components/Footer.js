import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer
      className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light
      flex items-center justify-center py-6 mt-auto bg-gray-100 dark:bg-dark'
    >
      <Layout className='w-full flex items-center justify-between px-6'>
        {/* Kiri */}
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        {/* Tengah */}
        <div className='flex items-center'>
          Built With <span className='text-primary text-2xl px-1'>♡</span>
          by&nbsp;
          <Link href="/" className='underline underline-offset-2 hover:text-primary transition'>
            Nisa Jamalia
          </Link>
        </div>

        {/* Kanan */}
        <Link
          href="/contact"
          className='underline underline-offset-2 hover:text-primary transition'
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
