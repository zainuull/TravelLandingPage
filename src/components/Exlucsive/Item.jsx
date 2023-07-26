import { AiFillStar } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';

const CardItem = (props) => {
  const {image, rating, city, country, price, discountPrice } = props

  return (
    <div className="w-[270px] h-[426px] rounded-md flex flex-col border hover:shadow-[var(--primary)] hover:shadow-md transition duration-300 cursor-pointer mt-11">
      <img src={image} />
      <div className="flex flex-col p-4 mt-4 gap-y-2">
        <div className="flex justify-between items-center gap-x-2">
          <h2 className="text-2xl font-semibold">{city }</h2>
          <div className="flex items-center gap-x-2">
            <AiFillStar className="text-yellow-400" />
            <p>{rating }</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center font-thin gap-x-1">
            <FiMapPin />
            <p>{country }</p>
          </div>
          <div className="flex items-center gap-x-3">
            <p className="font-thin line-through">${price }</p>
            <p className="bg-orange-100 text-[var(--primary)] rounded-lg p-1">${discountPrice }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
