import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <div className="grid grid-cols-12 px-4 md:px-12 py-4 md:py-8">
                <div className="col-span-12 md:col-span-4 lg:col-span-3 md:pe-5">
                    <div>
                        <h1 className='py-2 text-xl'>প্রাইস ফিল্টার করুন</h1>
                        <input type="range" min={0} max="100" value="75" className="range range-xs range-accent"/>
                        <div className='flex justify-between items-center py-2'>
                            <p>মূল্য ৳</p>
                            <input type="text" placeholder="৳৳৳" className="input input-bordered input-accent input-sm w-1/3" />
                            <p className='text-warning'>থেকে</p>
                            <input type="text" placeholder="৳৳৳৳৳" className="input input-bordered input-accent input-sm w-1/3" />
                        </div>
                        <h1 className='py-2 text-xl mt-4'>ক্যাটাগরি অনুযায়ী ফিল্টার করুন</h1>
                        <div className='hidden md:block'>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>ল্যাপটপ</p>
                                </div>
                                <div className="text-neutral">10</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>ঘড়ি</p>
                                </div>
                                <div className="text-neutral">07</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>স্পীকার</p>
                                </div>
                                <div className="text-neutral">16</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>চার্যার ফ্যান</p>
                                </div>
                                <div className="text-neutral">06</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>হেড ফোন</p>
                                </div>
                                <div className="text-neutral">11</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>সিসি টিভি ক্যামেরা</p>
                                </div>
                                <div className="text-neutral">17</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>টর্চ লাইট</p>
                                </div>
                                <div className="text-neutral">08</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>ওয়েব ক্যামেরা</p>
                                </div>
                                <div className="text-neutral">02</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>এ্যাকশন ক্যামেরা</p>
                                </div>
                                <div className="text-neutral">04</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>এয়ার কুলার</p>
                                </div>
                                <div className="text-neutral">12</div>
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
                        <h1 className='py-2 text-xl mt-4 hidden md:block'>ব্রান্ড অনুযায়ী ফিল্টার করুন</h1>
                        <div className='hidden md:block'>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>এ্যামাজন</p>
                                </div>
                                <div className="text-neutral">03</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>গুগল</p>
                                </div>
                                <div className="text-neutral">02</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>জয়রুম</p>
                                </div>
                                <div className="text-neutral">16</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>শাওমি</p>
                                </div>
                                <div className="text-neutral">25</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>হ্যাবিট</p>
                                </div>
                                <div className="text-neutral">11</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>ওরাইমো</p>
                                </div>
                                <div className="text-neutral">04</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>হোকো</p>
                                </div>
                                <div className="text-neutral">01</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>প্যানাসনিক</p>
                                </div>
                                <div className="text-neutral">13</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>স্যামসুং</p>
                                </div>
                                <div className="text-neutral">04</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>লিনেভো</p>
                                </div>
                                <div className="text-neutral">18</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>ফিলিপস</p>
                                </div>
                                <div className="text-neutral">06</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>সনি</p>
                                </div>
                                <div className="text-neutral">01</div>
                            </div>
                            <div className="flex justify-between py-1">
                                <div className="flex items-center">
                                    <input type="radio" name="radio-4" className="radio radio-accent" />
                                    <p className='ps-2'>রিম্যাক্স</p>
                                </div>
                                <div className="text-neutral">00</div>
                            </div>
                            
                        </div>
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