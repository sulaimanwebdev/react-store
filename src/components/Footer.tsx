import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="w-full bg-black px-5 py-7">
     <div className="grid grid-cols-[1fr,400px] max-w-[1200px] mx-auto">
        <div className="flex items-start gap-[120px]">
          <div>
           <Link to="/"><img src="/images/logo.png" alt="logo" /></Link>
          </div>

          <div>
            <div className='text-center text-white font-semibold'>
            ליצירת קשר<br/>
            <p>ניתן להתקשר&nbsp;:&nbsp;<strong>0549362598</strong>&nbsp;או&nbsp;<strong>1-700-500-611</strong>&nbsp; שלוחה 12</p>
            <p>spices-online@spices-center.com או לשלוח מייל</p>
            <p>עקבו אחרינו ברשתות החברתיות</p>
            <div className="flex items-center justify-center gap-3 mt-5">
                <a href="#"><img src="/images/instagram.png" alt="instagram" /></a>
                <a href="#"><img src="/images/facebook.png" alt="facebook" /></a>
                <a href="#"><img src="/images/tiktok.png" alt="tiktok" className='w-[25px]' /></a>
            </div>
            </div>
          </div>

        </div>

        <div className="flex items-start justify-end">
        <div className='flex items-start gap-10'>
            <div>
                <a href="#" className='text-white'>זכויות יוצרים </a>
            </div>

            <div className='flex flex-col gap-3'>
                <a href="#" className='text-white'>צור קשר</a>
                <a href="#" className='text-white'>תקנון</a>
                <a href="#" className='text-white'>הצהרת נגישות</a>
                <a href="#" className='text-white'>תקנון</a>
            </div>

            <div className='flex flex-col gap-3'>
                <a href="#" className='text-white'>רשימת סניפים </a>
                <a href="#" className='text-white'>תקנון</a>
                <a href="#" className='text-white'>הצהרת נגישות</a>
                <a href="#" className='text-white'>תקנון</a>
            </div>
            
        </div>
        </div>


     </div>
    </div>
    </>
  )
}

export default Footer