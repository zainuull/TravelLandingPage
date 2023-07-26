const Item = (props) => {
  const { image, title, subTitle } = props;

  return (
      <div className="w-[370px] h-[278px] rounded-lg bg-white p-10 mt-12 flex flex-col">
        <img src={image} className="w-[48px] h-[48px]" />
        <div className="flex flex-col mt-12 gap-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="font-thin">{subTitle}</p>
        </div>
      </div>
  );
};

export default Item;
