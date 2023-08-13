import React from 'react';

const page = () => {
    return (
        <div className='px-4 md:px-12 py-4 md:py-8'>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                <h1 className='text-2xl'>Disputes</h1>
                    
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>Subject</th>
                                <th>Date</th>
                                <th>Dispute</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Product</td>
                                <td>12 Aguest 2023</td>
                                <td>This Product is Bad</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                <h1 className="text-2xl">Dispute Form</h1>
                        <select id='option' className="select select-success w-full my-3">
                        <option disabled selected>Pick the subject</option>
                        <option>Order</option>
                        <option>Delivery</option>
                        <option>Price</option>
                        <option>Product</option>
                        </select>
                    <div>
                        <textarea className="textarea textarea-success w-full h-20" placeholder="Write your dispute here"></textarea>
                    </div>
                    <button className='btn btn-accent'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default page;