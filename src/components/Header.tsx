import {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = (props: any) => {
  const [menu, setmenu] = useState('-translate-y-full')
  return (
    <div className="fixed top-0 left-0 w-full bg-black border-solid border-b borer-white z-[99999]">
    <div className="flex items-center justify-between">
        <div className="w-full h-full">
          <div className="px-2 py-1.5 bg-[#000000] hidden lg:flex items-center justify-between">

            <div className="flex items-center gap-14">
              <div className="flex items-center gap-3">
                <a href="#"><img src="/images/facebook.png" alt="logo" className="w-[25px]" /></a>
                <a href="#"><img src="/images/instagram.png" alt="logo" className="w-[25px]" /></a>
                <a href="#"><img src="/images/whatsapp.png" alt="logo" className="w-[25px]" /></a>
              </div>

              <div className="flex items-center gap-7">
                 <div className="flex items-center gap-7">
                 <a href="/" className="text-white leading-none flex items-center gap-2.5">הרשמה<img src="/images/user-register.png" alt="icon" className="grayscale" /></a>
                 <a href="/" className="text-white leading-none flex items-center gap-2.5">כניסה<img src="/images/user-white.png" alt="icon" className="grayscale" /></a>
                 <div className="bg-white h-full rounded-full px-2 py-[2px] flex items-center gap-2 border-solid border border-gray-300">
                  <img src="/images/search.png" alt="icon" />
                  <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-right" />
                 </div>
                 </div>
              </div>

            </div>

            <div className="flex items-center gap-2">
              <a href="#"><img src="/images/wheelchair.jpg" alt="icon" className="w-[20px]" /></a>
              <a href="#"><img src="/images/card.jpg" alt="icon" className="w-[20px]" /></a>
              <a href="#"><img src="/images/location-white.png" alt="icon" className="w-[20px]" /></a>
            </div>

          </div>
         
         <div className="flex lg:hidden items-center h-full pl-2.5">
          <button onClick={()=> {setmenu('translate-y-0')}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></button>
         </div>
  
          <div className={`transition lg:translate-y-0 ${menu} flex flex-col lg:grid lg:grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] h-screen lg:h-full divide-y lg:divide-x divide-black w-full fixed top-0 left-0 lg:relative lg:top-auto lg:right-auto z-[99] max-h-screen overflow-y-auto`}>
            <Link to="/shop" className="px-2 py-2 h-full bg-red-500 flex items-center justify-center flex-col gap-1 text-center text-[15px] text-white">
              <img src="/images/icon1.jpg" alt="icon" />
              מבצעים
            </Link>

            <Link to="/shop" className="px-2 py-2 h-full bg-yellow-500 flex items-center justify-center flex-col gap-1 text-center text-[15px]">
              <img src="/images/icon2.jpg" alt="icon" className="w-[40px]" />
              מכשירי חשמל
            </Link>

            <Link to="/shop" className="px-2 py-2 h-full bg-yellow-500 flex items-center justify-center flex-col gap-1 text-center text-[15px]">
              <img src="/images/icon3.jpg" alt="icon" />
              אחסון וארגון
            </Link>

            <Link to="/shop" className="px-2 py-2 h-full bg-yellow-500 flex items-center justify-center flex-col gap-1 text-center text-[15px]">
              <img src="/images/icon4.jpg" alt="icon" />
              כלי אירוח
            </Link>

            <Link to="/shop" className="px-2 py-2 h-full bg-yellow-500 flex items-center justify-center flex-col gap-1 text-center text-[15px]">
              <img src="/images/icon5.jpg" alt="icon" />
              סכינים וחיתוך
            </Link>

            <Link to="/shop" className="px-2 py-2 h-full bg-yellow-500 flex items-center justify-center flex-col gap-1 text-center text-[15px]">
              <img src="/images/icon6.jpg" alt="icon" />
              כלי בישול
            </Link>

            <Link to="/shop" className="px-2 py-2 h-full bg-yellow-500 flex items-center justify-center flex-col gap-1 text-center text-[15px]">
              <img src="/images/icon7.jpg" alt="icon" />
              כלי בישול
            </Link>

            <Link to="/shop" className="px-2 py-2 h-full bg-yellow-500 flex items-center justify-center flex-col gap-1 text-center text-[15px]">
              <img src="/images/icon8.jpg" alt="icon" />
              כלי בישול
            </Link>

            <Link to="/shop" className="px-2 py-2 h-full bg-yellow-500 flex items-center justify-center flex-col gap-1 text-center text-[15px]">
              <img src="/images/icon9.jpg" alt="icon" />
              כלי בישול
            </Link>
 
            <button onClick={()=> {setmenu('-translate-y-full')}} className="flex lg:hidden absolute top-3 right-3 border-none">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </button>

          </div>
        </div>
        <Link to="/" className="flex items-center justify-center h-full bg-black px-5"><img src="/images/logo.png" alt="logo" className="w-[180px] lg:w-full h-full object-cover"/></Link>
    </div>
    
    <div className="hidden lg:flex items-center gap-14 py-1.5 px-2">
      <a href="#" className="flex items-center justify-center px-2 py-1.5 bg-green-500 text-white text-[15px] rounded-md font-bold w-fit">לקופה</a>
      <a href="#" className="flex items-center gap-7 text-white font-bold">
       <div>₪ 0.00 סה"כ</div>
       <div className="relative flex items-center gap-2">
        <img src="/images/cart.png" alt="icon" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
        <span className="absolute -top-[6px] -left-[10px] bg-black px-[2px] text-[15px]">0</span>
       </div>
      </a>
    </div>
    </div>
  )
}

export default Header