import { AiFillStar } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const VacationItem = (props) => {
  const { image, country, price, dayTrip, rating } = props;

  return (
    <div className="w-[375px] h-[447px] rounded-md flex flex-col border hover:shadow-[var(--primary)] hover:shadow-md transition duration-300 cursor-pointer mt-11">
      <img src={image} className='w-[374px] h-[327px]'/>
      <div className="flex flex-col p-4 mt-4 gap-y-2">
        <div className="flex justify-between items-center gap-x-2">
          <h2 className="text-2xl font-semibold">{country}</h2>
          <p className="text-[var(--primary)] rounded-lg p-1 text-xl font-semibold">${price}k</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center font-thin gap-x-2">
            <FaTelegramPlane className="text-[var(--primary)]" />
            <p>{dayTrip}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <AiFillStar className="text-yellow-400" />
            <p className='mr-2'>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacationItem;
