const ItemBlog = (props) => {
  const { image, title, date } = props
  
  return (
    <div className="w-[270px] h-[388px] flex flex-col rounded-md gap-y-4">
      <img src={image} />
      <p className="max-w-[200px]">{title }</p>
      <p className="font-thin">{date }</p>
    </div>
  );
};

export default ItemBlog;
