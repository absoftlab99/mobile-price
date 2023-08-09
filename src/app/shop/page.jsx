import Card from '@/components/Card/Card';
import React from 'react';

const Shop = () => {
    return (
        <div>
            <div className="flex justify-between items-center ps-5">
                <select className="select select-accent hidden md:block w-1/4">
                    <option disabled selected>সাজানোর জন্য সিলেক্ট করুন</option>
                    <option>বেস্ট সেলিং</option>
                    <option>কম থেকে বেশি মূল্য</option>
                    <option>বেশি থেকে কম মূল্য</option>
                </select>
                <h1 className='hidden md:block'>প্রোডাক্ট সংখ্যা: 1512 টি</h1>
            </div>
            <div className="grid grid-cols-12 gap-5 md:ps-5 py-5">
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Card></Card>
                </div>
            </div>
            <div className="join flex justify-center">
                <button className="join-item btn">1</button>
                <button className="join-item btn btn-accent btn-active">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
            </div>
        </div>
    );
};

export default Shop;