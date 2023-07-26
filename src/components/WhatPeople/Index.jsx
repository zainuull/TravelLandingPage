import client from "../../assets/Client-1.png";
import client2 from '../../assets/Client-2.png';
// Icons
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from 'react-icons/bs';

const WhatPeopleSay = () => {
  return (
    <div className="w-full h-[598px] bg-[var(--third)] p-10 flex justify-center items-center relative">
      <div className="flex justify-between gap-x-32 max-w-[1200px]">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-6xl font-bold max-w-[500px]">
            What people say <span className="text-[var(--primary)]">about us.</span>
          </h1>
          <p className="font-thin max-w-[400px]">Our Clients send us bunch of smilies with our services and we love them.</p>
          <div className="flex gap-x-4 text-4xl">
            <BsArrowLeftCircle />
            <BsFillArrowRightCircleFill className="text-[var(--primary)]" />
          </div>
        </div>
        <div>
          <img src={client} className="absolute top-20 right-16" />
          <img src={client2} className="ml-20 mt-16" />
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
