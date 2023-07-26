import ItemBlog from "./ItemBlog";
import blog from "../../assets/blog.png";
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';

const LatesBlog = () => {
  return (
    <div className="w-full h-[805px] p-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">
        Get update with <span className="text-[var(--primary)]">latest blog</span>
      </h1>
      <div className="flex gap-x-4 mt-12">
        <ItemBlog image={blog} title="The Amazing Difference a Year of Travelling ." date="July 27, 2021" />
        <ItemBlog image={blog2} title="Travel far enough, you meet yourself." date="July 31, 2021" />
        <ItemBlog image={blog3} title="How to Save Money While Visiting Africa ." date="July 29, 2021" />
        <ItemBlog image={blog4} title="Reflections on 5 Months of Travel: Time to Hang" date="July 30, 2021" />
      </div>
      <div className="flex items-center gap-x-2 mt-6">
        <div className="w-[15px] h-[15px] bg-gray-200 rounded-full"></div>
        <div className="w-[20px] h-[20px] bg-[var(--primary)] rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}

export default LatesBlog