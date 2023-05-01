import { Link } from "react-router-dom"
import { ContentContainer } from "../components/ContentContainer";
import Slider from "../components/Slider";
import Card1 from "../components/Card1";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  return (
    <>
      <ContentContainer>
         <Slider/>
        
        <div className="mt-[77px] lg:mt-[172px]">
        <div className="mt-20 px-5">
          <div className="text-[25px] font-bold text-center mb-2">מחלקות</div>
          <div className="grid grid-cols-1 2sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 max-w-[1200px] mx-auto">
            <CategoryCard index="1"/>
            <CategoryCard index="2"/>
            <CategoryCard index="3"/>
            <CategoryCard index="4"/>
            <CategoryCard index="5"/>
            <CategoryCard index="6"/>
            <CategoryCard index="7"/>
            <CategoryCard index="8"/>
          </div>
          <div className="flex items-center justify-start max-w-[1200px] mx-auto text-[18px] text-gray-600 mt-4"><Link to="/">{`<<`} לכל המחלקות</Link></div>
        </div>

        <div className="mt-20 px-5">
          <div className="text-[25px] font-bold text-center mb-2">מבצעים חמים</div>
          <div className="grid grid-cols-1 2sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 max-w-[1200px] mx-auto">

            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>
            <Card1/>

          </div>
        </div>

        <button className="mx-auto text-center flex items-center justify-center min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] rounded-full border-solid border border-[#4a4a4a] mt-10 mb-3"><img src="/images/plus.png" alt="plus" className="w-[25px]" /></button>
        </div>
      </ContentContainer>
    </>
  );
};

export { Home };
