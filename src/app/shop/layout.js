import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <div className="grid grid-cols-12 px-4 md:px-12 py-4 md:py-8">
                <div className="col-span-12 md:col-span-4 lg:col-span-3 md:pe-5">
                    <div>
                        <h1 className='py-2 text-xl'>প্রাইস ফিল্টার করুন</h1>
                        <input type="range" min={0} max="100" value="100" className="range range-xs range-accent" />
                        <div className='flex justify-between items-center py-2'>
                            <p>মূল্য ৳</p>
                            <input type="text" placeholder="৳৳৳" className="input input-bordered input-accent input-sm w-1/3" />
                            <p className='text-warning'>থেকে</p>
                            <input type="text" placeholder="৳৳৳৳৳" className="input input-bordered input-accent input-sm w-1/3" />
                        </div>
                        <h1 className='py-2 text-xl mt-4'>ক্যাটাগরি অনুযায়ী ফিল্টার করুন</h1>
                        <div className='hidden md:block'>
                            <div className="flex items-center">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>বেস্ট সেলিং</p>
                            </div>
                            <div className="flex items-center py-1">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>ইলেক্ট্রনিক্স</p>
                            </div>
                            <div className="flex items-center py-1">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>হোম এ্যাপলায়েন্স</p>
                            </div>
                            <div className="flex items-center py-1">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>ষ্মার্ট ওয়াচ</p>
                            </div>
                            <div className="flex items-center py-1">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>পাওয়ার ব্যাংক</p>
                            </div>
                            <div className="flex items-center py-1">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>ইলেকট্রিক ফ্যান</p>
                            </div>
                            <div className="flex items-center py-1">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>হেড ফোন</p>
                            </div>
                            <div className="flex items-center py-1">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>এয়ার ফোন</p>
                            </div>
                            <div className="flex items-center py-1">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>স্পীকার</p>
                            </div>
                            <div className="flex items-center py-1">
                                <input type="radio" name="radio-4" className="radio radio-accent" />
                                <p className='ps-2'>টর্চ লাইট</p>
                            </div>
                        </div>
                        <select className="select select-accent w-full md:hidden">
                            <option disabled selected>সকল ক্যাটাগরি</option>
                            <option>বেস্ট সেলিং</option>
                            <option>ইলেক্ট্রনিক্স</option>
                            <option>হোম এ্যাপলায়েন্স</option>
                            <option>ষ্মার্ট ওয়াচ</option>
                            <option>পাওয়ার ব্যাংক</option>
                            <option>ইলেকট্রিক ফ্যান</option>
                            <option>হেড ফোন</option>
                            <option>এয়ার ফোন</option>
                            <option>স্পীকার</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-9">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;