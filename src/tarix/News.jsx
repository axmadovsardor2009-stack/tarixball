import React from 'react'

const News = () => {
  return (
    <div  className='flex flex-col p-4 h-full w-full gap-3'>
      <div className='flex shadow-xl p-3 rounded-3xl h-fit flex-col'>
        <h1 className='text-2xl font-bold'>Darsliklar</h1>
        <p>10-sinf</p>
        <div className='flex flex-col gap-2 p-5'>
          <a href="https://drive.google.com/uc?authuser=0&id=14hHOfhHT73V6K5SLjJU9rFEuh57lsnA1&export=download" className='text-white bg-green-400 p-4 rounded-2xl'>Ozbekiston tarixi 10 sinf darslik - Kitobni yuklash⬇️</a>
          <a href="https://drive.google.com/uc?authuser=0&id=14q3BHLqKw2Db7Ulr-4k0u-iDZdwvoHC_&export=download" className='text-white bg-blue-400 p-4 rounded-2xl'>Jahon tarixi 10 sinf darslik - Kitobni yuklash⬇️</a>
        </div>
      </div>
      <div className='flex shadow-xl p-3 rounded-3xl h-fit flex-col'>
        <h1 className='text-2xl font-bold'>Classtest</h1>
        <p>Sana: 08.11.2025</p>
        <p>Mavzular:</p>
        <div className='flex flex-col gap-2 p-5'>
          <p>1-mavzu ⨀ Rossiya imperiyasi bosqini arafasida Buxoro amirligi, Qo'qon va Xiva xonliklaridagi ijtimoiy-siyosiy va iqtisodiy ahvol</p>
          <p>2-mavzu ⨀ Rossiya imperiyasining O'rta Osiyoga yurishi va Turkiston general-gubernatorligining tashkil topishi</p>
          <p>3-mavzu ⨀ Buxoro amirligi va Xiva xonligining Rossiya imperiyasi vassaliga aylanishi</p>
          <p>4-mavzu ⨀ Turkiston o'lkasida siyosiy-ma'muriy boshqaruv tizimi</p>
        </div>
      </div>
    </div>
  )
}

export default News
