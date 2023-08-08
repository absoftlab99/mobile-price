'use client'
import Cards from '@/components/Card/Cards'
import Carousel from '@/components/Carousel/Carousel'

export default function Home() {

  return (
    <main className="">
      <Carousel></Carousel>
      <h1 className='text-2xl text-center py-4 md:py-8'><b>জনপ্রীয়/বেশি বিক্রিত <span className='text-accent'>প্রোডাক্ট</span></b></h1>
      <Cards></Cards>
    </main>
  )
}
