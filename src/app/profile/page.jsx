import React from 'react';

const page = () => {
    return (
        <div className="md:flex gap-4 w-full py-8 px-4 md:px-8">
            <div className="grid py-4 flex-grow card bg-base-300 rounded-box place-items-center my-2">
                <h1 className='text-2xl'>আমার প্রোফাইল</h1>
                <img className='rounded-full w-28 h-28' src="https://i.ibb.co/X88tbV7/my-photo3.jpg" alt="Abdullah Al Mahmud" />
            </div> 
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center my-2">content</div>
        </div>
    );
};

export default page;