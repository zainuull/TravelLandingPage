import Item from './Item';

import Group1 from '../../assets/Group.png';
import Group2 from '../../assets/Group-2.png';
import Group3 from '../../assets/Group-3.png';


const ThingsToDo = () => {
  return (
    <div className="w-full h-[724px] bg-[var(--third)] p-10 mt-24 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          Things you need <span className="text-[var(--primary)]">to do</span>
        </h1>
        <p className="max-w-[400px] text-center font-thin mt-4">We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </p>
      </div>
      <div className="flex gap-x-8 mt-4">
        <Item image={Group1} title="Sign Up" subTitle="Completes all the work associated with planning and processing" />
        <Item image={Group2} title="Worth of Money" subTitle="After successful access then book from exclusive deals & pricing" />
        <Item image={Group3} title="Exciting Travel" subTitle="Start and explore a wide range of exciting travel experience." />
      </div>
    </div>
  );
}

export default ThingsToDo;