import { Link } from "react-router-dom"
import { ContentContainer } from "../components/ContentContainer";
import Slider from "../components/Slider";

const Shop = () => {
  return (
    <>
      <ContentContainer>
        
        <div className="mt-20 px-5">
          <div className="text-[25px] font-bold text-center mb-2">מחלקות</div>
          <div className="grid grid-cols-1 2sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 max-w-[1200px] mx-auto">
            <Link to="/"><img src="/images/category1.jpg" alt="category" className="w-full h-full" /></Link>
            <Link to="/"><img src="/images/category2.jpg" alt="category" className="w-full h-full" /></Link>
            <Link to="/"><img src="/images/category3.jpg" alt="category" className="w-full h-full" /></Link>
            <Link to="/"><img src="/images/category4.jpg" alt="category" className="w-full h-full" /></Link>
            <Link to="/"><img src="/images/category5.jpg" alt="category" className="w-full h-full" /></Link>
            <Link to="/"><img src="/images/category6.jpg" alt="category" className="w-full h-full" /></Link>
            <Link to="/"><img src="/images/category7.jpg" alt="category" className="w-full h-full" /></Link>
            <Link to="/"><img src="/images/category8.jpg" alt="category" className="w-full h-full" /></Link>
          </div>
          <div className="flex items-center justify-start max-w-[1200px] mx-auto text-[18px] text-gray-600 mt-4"><Link to="/">{`<<`} לכל המחלקות</Link></div>
        </div>

        <div className="mt-20 px-5">
          <div className="text-[25px] font-bold text-center mb-2">מבצעים חמים</div>
          <div className="grid grid-cols-1 2sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 max-w-[1200px] mx-auto">

            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>

            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>


            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>


            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>



            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>


            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>


            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>

            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>

            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>

            <div className="relative px-4 py-4 border-solid border bg-white">
             <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
             <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
             <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
             <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
             <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
            </div>

          </div>
        </div>

        <button className="mx-auto text-center flex items-center justify-center min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] rounded-full border-solid border border-[#4a4a4a] mt-10 mb-3"><img src="/images/plus.png" alt="plus" className="w-[25px]" /></button>
       
      </ContentContainer>
    </>
  );
};

export { Shop };
