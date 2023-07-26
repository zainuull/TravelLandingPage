import VacationItem from './Item';
import element from "../../assets/Element.png";
import Image1 from '../../assets/vacation.png';
import Image2 from '../../assets/vacation2.jpg';
import Image3 from '../../assets/vacation3.png';
// Icons
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from 'react-icons/bs';

const Vacation = () => {
  return (
    <div className="flex justify-center w-full h-[960px] p-10 max-w-[1200px] relative">
      <div className="flex flex-col text-center gap-y-3 items-center">
          <h1 className="text-4xl font-bold">
            Best <span className="text-[var(--primary)]">vacation plan</span>
          </h1>
          <img src={element }className='absolute right-40'/>

        <p className="font-thin max-w-[430px]">Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </p>
        <div className="flex gap-x-4 text-4xl mt-36 absolute right-5">
          <BsArrowLeftCircle />
          <BsFillArrowRightCircleFill className="text-[var(--primary)]" />
        </div>
        <div className="flex gap-x-6 mt-12">
          <VacationItem image={Image1} country="Rome, Italy" price="5,42" dayTrip="10 Days Trip" rating="4.8" />
          <VacationItem image={Image2} country="London, UK" price="2,42" dayTrip="07 Days Trip" rating="4.7" />
          <VacationItem image={Image3} country="Osaka, Japan" price="3,42" dayTrip="15 Days Trip" rating="4.9" />
        </div>
      </div>
    </div>
  );
};

export default Vacation;
