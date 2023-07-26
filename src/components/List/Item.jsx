import { RiArrowDownSLine } from 'react-icons/ri';

const Item = (props) => {
  const {title, subTitle } = props

  return (
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="text-xl">{title } </h1>
            <RiArrowDownSLine className="text-[var(--primary)] text-2xl font-bold" />
          </div>
          <p className="font-thin">{subTitle }</p>
        </div>
      </div>
  );
};

export default Item;
