import React from 'react'

const News = () => {
  return (
    <div  className='flex flex-col p-4 h-full w-full'>
      <div className='flex shadow-xl p-3 rounded-3xl h-fit flex-col'>
        <h1 className='text-2xl font-bold'>Classtest</h1>
        <p>Sana: 08.11.2025</p>
        <p>Mavzular:</p>
        <div className='flex flex-col gap-2 p-5'>
          <p>1-mavzu ⨀ Rossiya imperiyasi bosqini arafasida Buxoro amirligi, Qo'qon va Xiva xonliklaridagi ijtimoiy-siyosiy va iqtisodiy ahvol</p>
          <p>2-mavzu ⨀ Rossiya imperiyasining O'rta Osiyoga yurishi va Turkiston general-gubernatorligining tashkil topishi</p>
          <p>3-mavzu ⨀ Buxoro amirligi va Xiva xonligining Rossiya imperiyasi vassaliga aylanishi</p>
          <p>4-mavzu ⨀ Turkiston o'lkasida siyosiy-ma'muriy boshqaruv tizimi</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default News
