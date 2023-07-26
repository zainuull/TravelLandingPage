import logo from "../../assets/Logo-2.png"

const Navbar = () => {
  return (
    <header className="py-6 mb-6">
      <div className="w-[1170px] flex justify-between items-center">
        <img src={logo} className="w-[130px] h-[25px]"/>
        <div className="w-1/2 flex justify-center gap-x-4 items-center font-thin text-lg">
          <p>Home</p>
          <p>About</p>
          <p>Destination</p>
          <p>Tour</p>
          <p>Blog</p>
        </div>
        <div className="flex gap-x-4 items-center">
          <p className="text-[var(--primary)] hover:text-[var(--secondary)] transition duration-300 cursor-pointer">Login</p>
          <button className="w-[160px] h-[50px] text-white  bg-[var(--primary)] border-white rounded-md hover:bg-[var(--secondary)]">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
