import React from 'react';
import Card from './Card';

const Cards = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-5 px-4 lg:px-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                    <Card></Card>
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                    <Card></Card>
                </div>
            </div>
        </div>
    );
};

export default Cards;