import React from 'react';

const page = () => {
    return (
        <div className="grid grid-cols-12 py-8 px-4 md:px-8">
            <div className="col-span-12 md:col-span-6 my-2">
                <h1 className='text-2xl text-center'>আমার প্রোফাইল</h1>
                <figure className='flex justify-center relative'>
                    <img className='rounded-full w-28 h-28 mt-4 border-4 border-accent-focus ms-4' src="https://i.ibb.co/X88tbV7/my-photo3.jpg" alt="Abdullah Al Mahmud" />
                    <div className=''>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-patch-check-fill absolute bottom-2 right-32 w-6 h-6 text-warning md:bottom-2 md:right-[265px]" viewBox="0 0 16 16">
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                    </div>
                </figure>
                <div className='text-left py-2'>
                    <p className='py-2 p-4 text-center text-xl'>নামঃ <span>আব্দুল্লাহ আল মাহমুদ</span></p>
                    <div className='divider divide-dotted px-4'></div>
                    <p className='py-2 p-4'>ঠিকানাঃ <span>গ্রাম- রাঘবেন্দ্রপুর, ডাকঘর- বিনোদনগর (৫২৮০), উপজেলা- নবাবগঞ্জ, জেলা- দিনাজপুর।</span></p>
                    <p className='py-2 p-4'>শিপিং ঠিকানাঃ <span>গ্রাম- রাঘবেন্দ্রপুর, ডাকঘর- বিনোদনগর (৫২৮০), উপজেলা- নবাবগঞ্জ, জেলা- দিনাজপুর।</span></p>
                    <p className='py-2 p-4'>মোবাইল নম্বরঃ <a href='tel:+8801798930232'>+880 1798-930232</a></p>
                    <p className='py-2 p-4'>অল্টারনেটিং নম্বরঃ <a href='tel:+8801309054202'>+880 1309-054202</a></p>
                    <p className='py-2 p-4'>ইমেইল ঠিকানাঃ <a href='mailto:abdullahtech2@outlook.com'>abdullahtech2@outlook.com</a></p>


                </div>
            </div> 
            <div className="col-span-12 md:col-span-6 my-2 px-4">
                <h1 className='text-2xl text-center'>প্রোফাইল আপডেট ফরম</h1>
                <input type="file" className="file-input file-input-bordered file-input-accent w-full mt-4 my-1"  />
                <input type="text" placeholder="আপনার নাম লিখুন" className="input input-bordered input-accent w-full my-1" />
                <textarea className="textarea textarea-accent h-[60px] my-1 w-full" placeholder="আপনার বিস্তারিত ঠিকানা লিখুন"></textarea>
                <textarea className="textarea textarea-accent h-[60px] my-1 w-full" placeholder="প্রডাক্ট ডেলিভারির ঠিকানা লিখুন"></textarea>
                <div className="flex justify-between items-center gap-4">
                <input type="text" placeholder="আপনার মোবাইল নম্বর লিখুন" className="input input-bordered input-accent w-full my-1" />
                <input type="text" placeholder="অন্য আরেকটি মোবাইল নম্বর লিখুন (যদি থাকে)" className="input input-bordered input-accent w-full my-1" />
                </div>
                <input type="email" placeholder='আপনার ইমেইল ঠিকানাটি লিখুন' className='input input-bordered input-accent w-full my-1' />
                <div className="flex justify-center my-1">
                    <button className='btn btn-warning btn-md'>আপডেট প্রফাইল</button>
                </div>
            </div>
        </div>
    );
};

export default page;