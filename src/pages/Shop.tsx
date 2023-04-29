import { Link } from "react-router-dom"
import { ContentContainer } from "../components/ContentContainer";
import SideBar from "../components/SideBar";

const Shop = () => {
  return (
    <>
      <ContentContainer>
        
        <div className="grid grid-cols-[1fr,250px]">

          <div className="h-screen min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] lg:min-h-[calc(100vh-172px)] lg:max-h-[calc(100vh-172px)] overflow-y-auto">
            <img src="/images/artboard.jpg" alt="banner" className="w-full" />

            <div className="mt-7 p-2">

            <div className="p-2">
              <div className="font-bold text-[23px] text-[#4a4a4a] mb-2">משקאות</div>

              <div className="flex justify-end">
              <div className="grid grid-cols-1 2sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-1 max-w-[1000px]">

                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/bottle.jpg" alt="bottle" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>

                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/bottle.jpg" alt="bottle" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>


                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/bottle.jpg" alt="bottle" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>


                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/bottle.jpg" alt="bottle" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>



                 </div>
              </div>

            </div>






            <div className="mt-7 p-2">
              <div className="font-bold text-[23px] text-[#4a4a4a] mb-2">משקאות</div>

              <div className="flex justify-end">
              <div className="grid grid-cols-1 2sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-1 max-w-[1000px]">

                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/perfume.jpg" alt="perfume" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>

                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/perfume.jpg" alt="perfume" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>


                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/perfume.jpg" alt="perfume" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>


                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/perfume.jpg" alt="perfume" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>




                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/perfume.jpg" alt="perfume" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>

                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/perfume.jpg" alt="perfume" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>


                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/perfume.jpg" alt="perfume" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>


                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/perfume.jpg" alt="perfume" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>





                 </div>
              </div>

            </div>









            <div className="mt-7 p-2">
              <div className="font-bold text-[23px] text-[#4a4a4a] mb-2">משקאות</div>

              <div className="flex justify-end">
              <div className="grid grid-cols-1 2sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-1 max-w-[1000px]">

                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/bottle.jpg" alt="bottle" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>

                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/bottle.jpg" alt="bottle" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>


                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/bottle.jpg" alt="bottle" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>


                 <div className="relative px-4 py-4 border-solid border bg-white">
                  <img src="/images/bottle.jpg" alt="bottle" className="mx-auto w-[140px]" />
                  <div className="mt-4 font-bold">אוור לבן  Ever White - עמק האלה</div>
                  <div className="mt-2">5.99 ₪ ל-100 מ"ל</div>
                  <div className="mt-3 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
                    <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">הוספה לסל</button>
                  </div>
                 </div>



                 </div>
              </div>

            </div>





            </div>

          </div>

          <div className="px-2 py-4 0 h-screen min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] lg:min-h-[calc(100vh-172px)] lg:max-h-[calc(100vh-172px)] overflow-y-auto">
            <SideBar/>
          </div>
        </div>


      </ContentContainer>
    </>
  );
};

export { Shop };
