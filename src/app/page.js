'use client'
import Brand from '@/components/Brand/Brand'
import Cards from '@/components/Card/Cards'
import Carousel from '@/components/Carousel/Carousel'
import SpecialSection from '@/components/SpecialSection/SpecialSection'

export default function Home() {

  return (
    <main className="">
      <Carousel></Carousel>
      <h1 className='text-2xl md:text-3xl text-center py-4 md:py-8'><b>জনপ্রীয়/বেশি বিক্রিত <span className='text-accent'>প্রোডাক্ট</span></b></h1>
      <Cards></Cards>
      <div className="flex justify-between items-center px-4 md:px-12 py-5 md:pt-12">
        <div className="text-1xl md:text-2xl">
          ইলেক্ট্রনিক্স এবং এ্যাপলায়েন্স
        </div>
        <div className="btn btn-accent">সব গুলো দেখুন</div>
      </div>
      <SpecialSection></SpecialSection>
      <div className="flex justify-between items-center px-4 md:px-12 py-5 md:pt-12">
        <div className="text-1xl md:text-2xl">
          ল্যাপটপ এবং ট্যাব
        </div>
        <div className="btn btn-accent">সব গুলো দেখুন</div>
      </div>
      <SpecialSection></SpecialSection>
      <h1 className='text-2xl md:text-3xl text-center py-4 md:py-8'><b>জনপ্রীয় <span className='text-accent'>ব্রান্ড</span></b></h1>
      <Brand></Brand>
    </main>
  )
}
