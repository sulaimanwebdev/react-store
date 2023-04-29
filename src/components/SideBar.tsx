
const SideBar = () => {
  return (
    <>
     <button className="font-bold text-red-500 mb-2">
             משקאות חריפים
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-4 h-4 inline ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
             </button>
             <div className="w-full pr-5">
             <div className="flex flex-col text-right items-end justify-end divide-y w-full">
              <button className="py-2 font-bold text-red-500 flex w-full text-right justify-end">יין</button>
              <button className="py-2 text-[#4a4a4a] flex w-full text-right justify-end">בירה</button>
              <button className="py-2 text-[#4a4a4a] flex w-full text-right justify-end">ליקרים</button>
              <button className="py-2 text-[#4a4a4a] flex w-full text-right justify-end">משקאות חמים</button>
             </div>

             <div className="py-2 font-bold text-[#4a4a4a] text-[18px] flex w-full text-right justify-end mb-2 mt-4">מותג</div>
             <div className="flex flex-col text-right items-end justify-end divide-y w-full">
              <button className="py-2 text-[#4a4a4a] flex w-full text-right justify-end">הכל</button>
              <button className="py-2 text-[#4a4a4a] flex w-full text-right justify-end">VIAGGIO ESPRESSO (6)</button>
              <button className="py-2 text-[#4a4a4a] flex w-full text-right justify-end">ליקרים</button>
              <button className="py-2 text-[#4a4a4a] flex w-full text-right justify-end">תשבי (1)</button>
             </div>
      </div>
    </>
  )
}

export default SideBar