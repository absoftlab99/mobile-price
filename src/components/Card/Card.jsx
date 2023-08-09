import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <Link href='/product'>
      <div className="card bg-base-100 shadow-sm md:mx-0">
        <figure className="relative">
          <img
            src="https://dropshop.com.bd/wp-content/uploads/2023/08/k9-Pro-Amoled-Smart-Watch-in-BD.jpeg"
            alt="Shoes"
          />
        <button className="btn btn-warning btn-sm absolute top-6 right-1 rotate-45">10% OFF</button>
        </figure>
        <div className="card-body">
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
        </div>
      </div>
    </Link>
  );
};

export default Card;
