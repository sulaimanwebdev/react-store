import { useState } from "react"
import { ContentContainer } from "../components/ContentContainer";
import SideBar from "../components/SideBar";
import ShopSection from "../components/ShopSection";

const Shop = () => {

  const [sideBarTransition, setsideBarTransition] = useState('translate-x-full')
  return (
    <>
      <ContentContainer>
        
        <div className="relative 3md:grid grid-cols-[1fr,250px]">

          <div className="h-screen min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] lg:min-h-[calc(100vh-172px)] lg:max-h-[calc(100vh-172px)] overflow-y-auto">
            <img src="/images/artboard.jpg" alt="banner" className="w-full" />

            <div className="mt-7 p-2">
             
             <button onClick={()=> {setsideBarTransition('translate-x-0')}} className="inline 3md:hidden p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg></button>
            <div className="p-2">
              <div className="font-bold text-[23px] text-[#4a4a4a] mb-2">משקאות</div>
              <ShopSection/>

            </div>



            <div className="mt-7 p-2">
              <div className="font-bold text-[23px] text-[#4a4a4a] mb-2">משקאות</div>
              <ShopSection/>

             </div>


            </div>

          </div>

          <div className={`transition 3md:translate-x-0 ${sideBarTransition} px-2 py-4 0 min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] lg:min-h-[calc(100vh-172px)] lg:max-h-[calc(100vh-172px)] overflow-y-auto fixed bottom-0 right-0 3md:relative 3md:bottom-auto 3md:right-auto z-[99] bg-white border-solid border-l-2 3md:border-none w-full max-w-[300px] 3md:max-w-auto`}>
            <button onClick={()=> {setsideBarTransition('translate-x-full')}} className="flex 3md:hidden items-end justify-end w-full my-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
            <SideBar/>
          </div>
        </div>


      </ContentContainer>
    </>
  );
};

export { Shop };
