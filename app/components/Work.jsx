import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { projekData } from '@/assets/assets'

const Work = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{duration: 1, }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

        <motion.h4
        initial={{ y:-20, opacity: 0 }}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>
          Projek
        </motion.h4>

        <motion.h2
        initial={{ y:-20, opacity: 0 }}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>
          Portofolio Saya
        </motion.h2>

        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Saya telah mengerjakan berbagai proyek yang mencerminkan keterampilan saya dalam pengembangan perangkat lunak.
        </motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className='grid grid-cols-auto text-center gap-6 my-10'>
            {projekData.map(({icon, title, description, link, id}) => (
              <div
               key={id} className=' rounded-lg px-2 py-2  cursor-pointer  flex flex-col items-center justify-center'>
                <motion.div   
              whileHover={{scale: 1.05}}
              className='border border-gray-400 p-4 hover:bg-lightHover hover:shadow-black hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt='' className='w-70' />
                <h3 className='text-lg my-4
                 text-gray-700 dark:text-white'>
                  {title}
                </h3>

                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                  {description}
                </p>
                </motion.div>
              </div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Work