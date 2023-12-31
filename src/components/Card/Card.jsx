import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm md:mx-0">
        <figure className="relative">
          <img
            src="https://dropshop.com.bd/wp-content/uploads/2023/08/Extonic-Air-Cooler-Fan-ET-C702-Blue-800x800.jpeg"
            alt="Product Image"
          />
        <button className="btn btn-warning btn-sm absolute top-2 right-2">১০% ছাড়</button>

        <div className="absolute bottom-2 left-2">
          <button className="btn btn-secondary btn-md md:btn-sm rounded me-2">কিনুন</button>
          <button className="btn btn-primary btn-md md:btn-sm rounded">ব্যাগে রাখুন</button>
        </div>

        </figure>
        <Link href='/product' className="card-body">
          <h2 className="">
            HK9 Pro Amoled Smart Watch – Black Color
          </h2>
          <p className="">
            দাম: <span className="text-warning">৩০০০ টাকা</span>
          </p>

          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-accent"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-accent"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-accent"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-accent"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-accent"
            />
          </div>

          <div className="card-actions justify-start pt-2">
            <div className="badge badge-outline">স্ম্যার্ট ওয়াচ</div>
            <div className="badge badge-outline">বেস্ট সেলিং</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
