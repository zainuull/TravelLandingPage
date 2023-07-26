import Item from "./Item"

const List = () => {
  return (
    <div className="min-w-[841px] min-h-[124px] shadow-lg p-10 flex justify-evenly">
      <Item title="Location" subTitle="Where are you going" />
      <Item title="Date" subTitle="When you will go" />
      <Item title="Guest" subTitle="Number of guest" />
      <div>
        <button className="w-[165px] h-[60px] text-white border-white font-semibold hover:bg-[var(--secondary)] transition duration-300">Explore Now</button>
      </div>
    </div>
  );
}

export default List