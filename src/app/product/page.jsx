'use client'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const page = () => {
    return (
        <div className='py-8'>
            <div className="grid grid-cols-12 px-4 md:px-12 md:py-8">
                <div className="col-span-12 md:col-span-5 md:pe-5">
                    <div className='md:hidden'>
                        <h1 className='text-3xl'>Mini Waterproof Rechargeable Shaving Machine</h1>
                        <div className="py-2">
                            <div className="badge badge-outline me-2">ইলেক্ট্রনিক আইটেম</div>
                            <div className="badge badge-outline">শেভিং মেশিন</div>
                        </div>
                    </div>
                    <Carousel className='mt-2'>
                        <div className=''>
                            <img src="https://barirdokan.com/wp-content/uploads/2023/08/1.jpg" />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                        <div>
                            <img src="https://barirdokan.com/wp-content/uploads/2023/08/2.webp" />
                            {/* <p className="legend">Legend 2</p> */}
                        </div>
                        <div>
                            <img src="https://barirdokan.com/wp-content/uploads/2023/08/3.jpg" />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                    </Carousel>
                </div>
                <div className="col-span-12 md:col-span-7 ">
                    <div className='hidden md:block'>
                        <h1 className='text-3xl'>Mini Waterproof Rechargeable Shaving Machine</h1>
                        <div className="py-2">
                            <div className="badge badge-outline me-2">ইলেক্ট্রনিক আইটেম</div>
                            <div className="badge badge-outline">শেভিং মেশিন</div>
                        </div>
                    </div>
                    <h1 className='text-2xl py-2'>দামঃ <s className='text-neutral'>৩৫০০</s> ৩০০০ টাকা </h1>

                    <h1 className='text-xl'><u>সংক্ষিপ্ত বর্ণনা</u>ঃ</h1>
                    <ul className='list-decimal list-inside'>
                        <li>পোর্টএবল এবং হালকা</li>
                        <li>ব্যাটারির চার্য দির্ঘ্যক্ষন থাকে</li>
                        <li>চার ধরনের স্পীড ভেরিয়েবল বিদ্যমান</li>
                        <li>চার্য দেওয়ার জন্য ইউএসবি পোর্ট ব্যবহার করা যাবে</li>
                        <li>পাখাটির মাথা এডযাস্ট করা যাবে</li>
                        <li>প্রাকৃতিক বাতাসের মত শান্তি</li>
                    </ul>
                    <div className='py-4 flex gap-4'>
                        <input type="number" placeholder="1" className="input input-bordered input-accent w-20" />
                        <button className='btn btn-warning'>ব্যাগে যু্ক্ত করুন</button>
                    </div>
                </div>
            </div>
            <div className='px-4 md:px-8'>
                <Tabs>
                    <TabList>
                    <Tab>প্রডাক্টের বিস্তারিত বর্ণনা</Tab>
                    <Tab>কাস্টমার রিভিউ <span className='text-warning font-bold'>0</span></Tab>
                    </TabList>

                    <TabPanel>
                        <h1 className='text-3xl py-3'>Awei F21 Mini Rechargeable Fan (2000mAh) In Bangladesh</h1>
                        <p className='text-justify'>
                            TheAwei F21 Mini Rechargeable Fan is now available in Bangladesh. Get the original products at the most affordable price only at DropShop.com.bd and enjoy the quality with the promise of the best customer service in Bangladesh.<br></br>

                            The Awei F21 Mini Rechargeable Fan is a small, portable fan that can be used to cool you down on hot days. It has a 2000mAh battery that can provide up to 4 hours of run time on a single charge. The fan has 4 different wind speeds, and it can also be used as a USB charging treasure.<br></br><br></br>

                            The Awei F21 Mini Rechargeable Fan is perfect for people who are looking for a portable and affordable way to stay cool on hot days. It is also a good option for people who need a fan that can be used as a USB charging treasure.<br></br><br></br>

                            The fan is small and lightweight, making it easy to carry with you wherever you go. It also has a long battery life, so you can use it for extended periods of time without having to worry about it running out of power.<br></br><br></br>

                            The fan has 4 different wind speeds, so you can adjust it to the perfect setting for your needs. It also has a natural wind simulation feature, which can help you to feel more comfortable on hot days.<br></br><br></br>

                            The Awei F21 Mini Rechargeable Fan is a great value for the price. It is a small, portable fan with a long battery life and 4 different wind speeds. It is also a good option for people who need a fan that can be used as a USB charging treasure.<br></br><br></br>

                            <b>Features:</b><br></br>
                            <ul className='list-disc list-inside'>
                                <li>Portable and lightweight</li>
                                <li>Long battery life</li>
                                <li>4 different wind speeds</li>
                                <li>Can be used as a USB charging treasure</li>
                                <li>Adjustable head</li>
                                <li>Natural wind simulation</li>
                            </ul>
                            <br></br><br></br>
                            <b>Benefits:</b><br></br>
                            <ul className='list-disc list-inside'>
                                <li>Stay cool on hot days</li>
                                <li>Keep your devices charged</li>
                                <li>Enjoy a natural breeze</li>
                                <li>Easy to use and carry</li>
                            </ul>
                            <br></br><br></br>
                            <b>Specifications:</b><br></br>
                            <ul className='list-disc list-inside'>
                                <li>Dimensions: 100 x 100 x 150mm</li>
                                <li>Weight: 200g</li>
                                <li>Battery: 2000mAh</li>
                                <li>Wind speeds: 4</li>
                                <li>Runtime: Up to 4 hours</li>
                            </ul>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default page;