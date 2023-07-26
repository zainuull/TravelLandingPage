import Image from "../../assets/Banner.png";

const Banner = () => {
  return (
    <div className="max-w-[1200px] flex justify-between items-center gap-x-12">
      <div className="max-w-[500px] flex flex-col gap-y-4">
        <p className="text-6xl font-semibold">
          Get started your exciting <span className="text-[var(--primary)]">journey </span> with us.
        </p>
        <p className="font-thin text-xl max-w-[450px]">A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>
        <button className="w-[178px] h-[60px] mt-6 text-[var(--primary)] bg-white hover:text-[var(--secondary)] hover:border-[var(--secondary)]">Discover Now</button>
      </div>
      <div>
        <img src={Image} className="w-[785px] h-[585px]" />
      </div>
    </div>
  );
}

export default Banner;