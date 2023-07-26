import subscribe from "../../assets/Subscribe.png";
import logo from "../../assets/Logo-2.png";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import ItemFooter from "./ItemFooter";

const Footer = () => {
  return (
    <div className="w-full h-[800px] bg-[var(--third)] flex flex-col items-center justify-center relative mt-40">
      <img src={subscribe} className="absolute -top-40" />
      <div className="w-full flex justify-evenly items-center mt-[300px]">
        <div className="flex flex-col w-[255px] h-[176px] gap-y-4">
          <img src={logo} className="w-[130px] h-[24px]" />
          <p className="font-thin">Book your trip in minute, get full Control for much longer.</p>
          <div className="flex items-center gap-x-4">
            <div className="w-[50px] h-[50px] rounded-full shadow-lg relative flex justify-center items-center">
              <BiLogoFacebook className="" />
            </div>
            <div className="w-[55px] h-[55px] rounded-full bg-[var(--primary)] shadow-lg relative flex justify-center items-center">
              <BiLogoInstagram className="text-white" />
            </div>
            <div className="w-[50px] h-[50px] rounded-full shadow-lg relative flex justify-center items-center">
              <BiLogoTwitter className="" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-[150px]">
          <ItemFooter title="Company" subTitle1="About" subTitle2="Careers" subTitle3="Logistic" subTitle4="Privacy & Policy" />
          <ItemFooter title="Contact" subTitle1="Help/FAQ" subTitle2="Press" subTitle3="Affilates" subTitle4="" />
          <ItemFooter title="More" subTitle1="Press Centre" subTitle2="Our Blog" subTitle3="Low fare tips" subTitle4="" />
        </div>
      </div>
      <div className="w-[1200px] h-[1px] bg-gray-200 mt-20 flex flex-col absolute bottom-20">
        <div className="flex justify-between font-thin mt-4">
          <p>Copyright, Trabook 2022. All rights reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer