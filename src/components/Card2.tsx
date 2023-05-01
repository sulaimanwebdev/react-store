import React from 'react'

const Card2 = () => {
  return (
    <>
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
    </>
    
  )
}

export default Card2