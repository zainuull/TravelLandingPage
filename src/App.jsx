import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import List from "./components/List/Index";
import ThingsToDo from "./components/ThingsToDo/Index";
import Exlusive from "./components/Exlucsive/Index";
import Vacation from "./components/Vacation/Index";
import WhatPeopleSay from "./components/WhatPeople/Index";
import LatesBlog from "./components/LatesBlog/Index";
import Footer from "./components/Footer/Index";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <Banner />
      <List />
      <ThingsToDo />
      <Exlusive />
      <Vacation />
      <WhatPeopleSay />
      <LatesBlog/>
      <Footer/>
    </div>
  );
}

export default App
