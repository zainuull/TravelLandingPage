const ItemFooter = (props) => {
  const {title, subTitle1, subTitle2, subTitle3, subTitle4 = "" } = props

  return (
    <div>
      <h1 className="text-2xl font-semibold">{title }</h1>
      <div className="font-thin flex flex-col gap-y-2 mt-6">
        <p>{subTitle1 }</p>
        <p>{subTitle2 }</p>
        <p>{subTitle3 }</p>
        <p>{subTitle4 }</p>
      </div>
    </div>
  );
}

export default ItemFooter