import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Mengirim Pesan...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "75f500a9-2533-45b4-aef6-a171e29299a8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Pesan berhasil terkirim");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <motion.div 
    initial={{ opacity: 0 }}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{ y:-20, opacity: 0 }}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'>
            Kontak
        </motion.h4>

        <motion.h2 
        initial={{ y:-20, opacity: 0 }}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'>
            Hubungi Saya
        </motion.h2>

        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Saya selalu terbuka untuk diskusi dan kolaborasi. Jika Anda memiliki pertanyaan, saran, atau ingin bekerja sama, jangan ragu untuk menghubungi saya.
        </motion.p>

        <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto' action="">
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                <motion.input 
                initial={{ x:-50, opacity: 0 }}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.1}}
                type="text" placeholder='Masukkan nama anda' required className='flex-1/2 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90' name='nama'/>

                <motion.input
                initial={{ x:50, opacity: 0 }}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.2}}
                type="email" placeholder='Masukkan email anda' required className='flex-1/2 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>
            </div>

            <motion.textarea 
            
            initial={{ y:100, opacity: 0 }}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.3}}
            rows={6} placeholder='Masukkan pesan anda' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='pesan'></motion.textarea>

            <motion.button
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}}
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white dark:hover:bg-darkHover' type='submit'>Kirim Pesan <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact