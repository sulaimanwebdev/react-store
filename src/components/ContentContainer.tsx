import { useLocation } from "react-router-dom"
import Footer from "./Footer";
import Header from "./Header";

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {

  return (
    <main className="w-full antialiased text-right">
      <Header/>

       <div className="w-full overflow-x-hidden mt-[74px] lg:mt-[172px]">
        {children}
       </div>

       {location.pathname === "/" ? <Footer/> : null}

     </main>
  );
};

export { ContentContainer };