import CardItem from "./Item";
import Image1 from "../../assets/Image.png"
import Image2 from '../../assets/Image-2.png';
import Image3 from '../../assets/Image-3.png';
import Image4 from '../../assets/Image-4.png';
// Icons
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from 'react-icons/bs';


const Exlusive = () => {
  return (
    <div className="flex justify-center w-full h-[900px] p-10 max-w-[1200px]">
      <div className="flex flex-col text-center gap-y-3 items-center">
        <h1 className="text-4xl font-bold">
          Exclusive <span className="text-[var(--primary)]">deals & discounts</span>
        </h1>
        <p className="font-thin max-w-[330px]">Discover our fantastic early booking discounts & start planning your journey.</p>
        <div className="flex gap-x-4">
          <CardItem image={Image1} rating="4.8" city="Madrid" country="Spain" price="950" discountPrice="850" />
          <CardItem image={Image2} rating="4.5" city="Firenze" country="Italy" price="850" discountPrice="750" />
          <CardItem image={Image3} rating="4.4" city="Paris" country="France" price="699" discountPrice="599" />
          <CardItem image={Image4} rating="4.8" city="London" country="UK" price="1050" discountPrice="950" />
        </div>
        <div className="flex gap-x-4 text-4xl mt-6">
          <BsArrowLeftCircle />
          <BsFillArrowRightCircleFill className="text-[var(--primary)]" />
        </div>
      </div>
    </div>
  );
};

export default Exlusive;
