
const Card1 = () => {
  return (
    <>
    <div className="relative px-4 py-4 border-solid border bg-white">
      <img src="/images/sale.png" alt="sale" className="absolute top-2 left-2" />
      <img src="/images/small.jpg" alt="small" className="mx-auto w-[140px]" />
      <div className="mt-4 font-bold">תבנית אמייל מלבנית אורך 42 ס"מ</div>
      <div className="mt-10 font-semibold text-[18px] text-[#4a4a4a]">₪ 49.90</div>
      <button className="mt-4 w-full py-2 border-solid border border-[#4a4a4a] text-[#4a4a4a]">לפרטים</button>
    </div>
    </>
  )
}

export default Card1