import React from 'react';
import one from '../../assets/icon/1.png'
import two from '../../assets/icon/2.png'
import three from '../../assets/icon/3.png'
import four from '../../assets/icon/4.png'
import five from '../../assets/icon/5.png'
import Image from 'next/image';

const page = () => {
    return (
        <div className='px-4 md:px-12'>
            <div className="grid grid-cols-12 gap-4 py-4 md:py-8">
                <div className="col-span-12 md:col-span-6">
                    <label htmlFor="order_id">Order Id:</label>
                    <input id='order_id' type="text" placeholder="enter the order track id" className="input input-bordered input-accent w-full" />
                </div>
                <div className="col-span-12 md:col-span-6">
                    <label htmlFor="billing_mail">Billing Email:</label>
                    <input id='billing_mail' type="text" placeholder="enter the billing email" className="input input-bordered input-accent w-full" />
                </div>
            </div>
            <button className='btn btn-accent'>Track Order</button>
            <div className='divider'></div>
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                    <div className="flex gap-5 justify-center">
                        <div className='bg-white p-2 md:p-5 rounded md:rounded-full'>
                            <Image
                            src={one}
                            alt="Order Recive"
                            className='w-16 h-16'
                            />
                        </div>
                        <div className='bg-white p-2 md:p-5 rounded md:rounded-full'>
                            <Image
                            src={two}
                            alt="Order Recive"
                            className='w-16 h-16'
                            />
                        </div>
                        <div className='bg-white p-2 md:p-5 rounded md:rounded-full'>
                            <Image
                            src={three}
                            alt="Order Recive"
                            className='w-16 h-16'
                            />
                        </div>
                        <div className='bg-white p-2 md:p-5 rounded md:rounded-full'>
                            <Image
                            src={four}
                            alt="Order Recive"
                            className='w-16 h-16'
                            />
                        </div>
                        <div className='bg-white p-2 md:p-5 rounded md:rounded-full'>
                            <Image
                            src={five}
                            alt="Order Recive"
                            className='w-16 h-16'
                            />
                        </div>
                    </div>
                    <ul className="steps flex gap-3 md:gap-[60px] justify-center my-2">
                        <li data-content="✓" className="step step-accent">Step 1</li>
                        <li data-content="✕" className="step step-neutral">Step 2</li>
                        <li data-content="✕" className="step step-neutral">Step 3</li>
                        <li data-content="✕" className="step step-neutral">Step 4</li>
                        <li data-content="✕" className="step step-neutral">Step 5</li>
                    </ul>
                </div>
                <div className='divider divider-horizontal'></div>
                <div className="col-span-12 md:col-span-6">

                </div>
            </div>
        </div>
    );
};

export default page;